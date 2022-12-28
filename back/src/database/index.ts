console.log("Database");

import Database from "better-sqlite3";

export const filename = "land";

export const options: Database.Options = {
  verbose: (message) => console.log(message),
};

export const database = new Database(`${filename}.db`, options);

(async () => {
  console.log("Database:IIF");
  database.pragma("journal_mode = WAL");
})();
