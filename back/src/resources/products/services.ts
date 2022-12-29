console.log("Products:Services");

import { Product } from "./type";
import repositories from "./repositories";
import { UUID } from "../../types";

const createOne = async (parameters: Product) => {
  return repositories.createOne(parameters);
};

const readAll = async () => {
  return repositories.readAll();
};

const readOne = async (parameters: { uuid: UUID }) => {
  return repositories.readOne(parameters);
};

const updateOne = async (parameters: Product) => {
  return repositories.updateOne(parameters);
};

const deleteOne = async (parameters: { uuid: UUID }) => {
  return repositories.deleteOne(parameters);
};

export default {
  createOne,
  readAll,
  readOne,
  updateOne,
  deleteOne,
};
