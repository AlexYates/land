console.log("Products:Routes");

import { server } from "../../server";
import { FastifyReply, FastifyRequest } from "fastify";
import { Product } from "./type";
import { UUID } from "../../types";
import schemas from "./schemas";
import services from "./services";

server.register(
  (instance, _options, next) => {
    // createOne
    instance.post(
      "/",
      { schema: { body: schemas.createOne } },
      async (
        { body: { price, title, uuid } }: any | FastifyRequest,
        reply: FastifyReply
      ) => {
        const parameters: Product = { price, title, uuid };
        const data = await services.createOne(parameters);
        reply.send(data);
      }
    );
    // getAll
    instance.get("/", async (_request: FastifyRequest, reply: FastifyReply) => {
      const data = await services.getAll();
      reply.send(data);
    });
    // getOne
    instance.get(
      "/:uuid",
      { schema: { params: schemas.getOne } },
      async (
        { params: { uuid } }: any | FastifyRequest,
        reply: FastifyReply
      ) => {
        const parameters: { uuid: UUID } = { uuid };
        const data = await services.getOne(parameters);
        reply.send(data);
      }
    );
    // updateOne
    instance.patch(
      "/",
      { schema: { body: schemas.updateOne } },
      async (
        { body: { price, title, uuid } }: any | FastifyRequest,
        reply: FastifyReply
      ) => {
        const parameters: Product = { price, title, uuid };
        const data = await services.updateOne(parameters);
        reply.send(data);
      }
    );
    // deleteOne
    instance.delete(
      "/",
      { schema: { body: schemas.deleteOne } },
      async ({ body: { uuid } }: any | FastifyRequest, reply: FastifyReply) => {
        const parameters: { uuid: UUID } = { uuid };
        const data = await services.deleteOne(parameters);
        reply.send(data);
      }
    );
    next();
  },
  { prefix: "products" }
);
