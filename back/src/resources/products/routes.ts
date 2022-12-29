console.log("Products:Routes");

import { server } from "../../server";
import { FastifyReply, FastifyRequest } from "fastify";
import schemas from "./schemas";
import services from "./services";

server.register(
  (instance, _options, next) => {
    // createOne
    instance.post(
      "/",
      schemas.createOne,
      async (
        { body: { price, title, uuid } }: any | FastifyRequest,
        reply: FastifyReply
      ) => {
        return await reply.send(
          await services.createOne({ price, title, uuid })
        );
      }
    );
    // readAll
    instance.get(
      "/",
      schemas.readAll,
      async (_request: FastifyRequest, reply: FastifyReply) => {
        return await reply.send(await services.readAll());
      }
    );
    // readOne
    instance.get(
      "/:uuid",
      schemas.readOne,
      async (
        { params: { uuid } }: any | FastifyRequest,
        reply: FastifyReply
      ) => {
        return await reply.send(await services.readOne({ uuid }));
      }
    );
    // updateOne
    instance.patch(
      "/",
      schemas.updateOne,
      async (
        { body: { price, title, uuid } }: any | FastifyRequest,
        reply: FastifyReply
      ) => {
        return await reply.send(
          await services.updateOne({ price, title, uuid })
        );
      }
    );
    // deleteOne
    instance.delete(
      "/",
      schemas.deleteOne,
      async ({ body: { uuid } }: any | FastifyRequest, reply: FastifyReply) => {
        return await reply.send(await services.deleteOne({ uuid }));
      }
    );
    next();
  },
  { prefix: "products" }
);
