console.log("Index");

import { server } from "./server";
import "./resources/products/routes";

server.listen({ port: 3000 }, async (error, address) => {
  if (error) {
    server.log.warn(error);
    process.exit(1); // TODO Gracefull / PM2
  }
  // TODO
  console.log("Index", server.printRoutes());
});
