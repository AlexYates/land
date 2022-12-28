console.log("Products:Statements");

import statements from "../../utilities/statements";

export const resource = "products"; // TODO: Get from directory.

const down = statements.statement("products", "down");

const up = statements.statement("products", "up");

const createOne = statements.statement("products", "createOne");

const readAll = statements.statement("products", "readAll");

const readOne = statements.statement("products", "readOne");

const updateOne = statements.statement("products", "updateOne");

const deleteOne = statements.statement("products", "deleteOne");

export default {
  down,
  up,
  createOne,
  readAll,
  readOne,
  updateOne,
  deleteOne,
};
