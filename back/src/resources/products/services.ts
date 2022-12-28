console.log("Products:Services");

import { Product } from "./type";
import repositories from "./repositories";
import { UUID } from "../../types";

const createOne = async (parameters: Product) => {
  return repositories.createOne(parameters);
};

const getAll = async () => {
  return repositories.getAll();
};

const getOne = async (parameters: { uuid: UUID }) => {
  return repositories.getOne(parameters);
};

const updateOne = async (parameters: Product) => {
  return repositories.updateOne(parameters);
};

const deleteOne = async (parameters: { uuid: UUID }) => {
  return repositories.deleteOne(parameters);
};

export default {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
};
