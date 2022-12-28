console.log("Utilities");

import fs from "node:fs";

const cwd = process.cwd();

const statement = async (resource: string, name: string) =>
  fs.readFileSync(`${cwd}/src/resources/${resource}/${name}.sql`).toString();

export default {
  statement,
};
