console.log("Products:Routes");

const createOne = {
  type: "object",
  properties: {
    price: { type: "number" },
    title: { type: "string" },
    uuid: { type: "string" },
    //
    // test: { type: "string" },
  },
  required: [
    "price",
    "title",
    "uuid",
    //
    // "test",
  ],
};

const readOne = {
  type: "object",
  properties: {
    uuid: { type: "string" },
  },
  required: ["uuid"],
};

const updateOne = {
  type: "object",
  properties: {
    price: { type: "number" },
    title: { type: "string" },
    uuid: { type: "string" },
  },
  required: ["price", "title", "uuid"],
};

const deleteOne = {
  type: "object",
  properties: {
    uuid: { type: "string" },
  },
  required: ["uuid"],
};

export default {
  createOne,
  getOne: readOne,
  updateOne,
  deleteOne,
};
