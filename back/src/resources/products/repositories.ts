console.log("Products:Repositories");

import { database } from "../../database";
import { items } from "./seeds";
import statements from "./statements";

// TODO move elsewhere?
(async () => {
  console.log("Products:Repositories:Database:IIF");
  database.pragma("journal_mode = WAL");
  database.prepare(await statements.down).run();
  database.prepare(await statements.up).run();
  const insert = database.prepare(await statements.createOne);
  const insertMany = database.transaction((items) => {
    for (const item of items) insert.run(item);
  });
  insertMany(items);
})();

export const createOne = async (parameters: any) => {
  return database.prepare(await statements.createOne).run(parameters);
};

export const getAll = async () => {
  return database.prepare(await statements.readAll).all();
};

export const getOne = async (parameters: any) => {
  return await database.prepare(await statements.readOne).get(parameters);
};

export const updateOne = async (parameters: any) => {
  return database.prepare(await statements.updateOne).run(parameters);
};

export const deleteOne = async (parameters: any) => {
  return database.prepare(await statements.deleteOne).run(parameters);
};

export default {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
};
