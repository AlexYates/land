console.log("Server");

import Fastify, { FastifyServerOptions } from "fastify";

export const options: FastifyServerOptions = {
  logger: {
    redact: ["req.headers.authorization"],
  },
};

export const server = Fastify(options);
