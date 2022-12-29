console.log("Products:Schemas");

const properties = {
  price: { type: "number" },
  title: { type: "string" },
  uuid: { type: "string" },
};

const createOne = {
  schema: {
    body: {
      properties,
      required: ["price", "title", "uuid"],
      type: "object",
    },
    response: {
      200: {
        properties,
        type: "object",
      },
    },
  },
};

const readAll = {
  schema: {
    response: {
      200: {
        items: {
          properties,
          type: "object",
        },
        type: "array",
      },
    },
  },
};

const readOne = {
  schema: {
    params: {
      properties: {
        uuid: { type: "string" },
      },
      required: ["uuid"],
      type: "object",
    },
    response: {
      200: {
        properties,
        type: "object",
      },
    },
  },
};

const updateOne = {
  schema: {
    body: {
      properties,
      required: ["price", "title", "uuid"],
      type: "object",
    },
    response: {
      200: {
        properties,
        type: "object",
      },
    },
  },
};

const deleteOne = {
  schema: {
    body: {
      properties: {
        uuid: { type: "string" },
      },
      required: ["uuid"],
      type: "object",
    },
  },
  response: {
    200: {
      properties,
      type: "object",
    },
  },
};

export default {
  createOne,
  readAll,
  readOne,
  updateOne,
  deleteOne,
};
