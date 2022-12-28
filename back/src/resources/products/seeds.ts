import { random } from "lodash";
import { randomUUID } from "crypto";
import { LoremIpsum } from "lorem-ipsum";
const lorem = new LoremIpsum();

export const items = new Array(8).fill(null).map(() => ({
  price: Number(random(0.99, 99999, true).toFixed(2)),
  title: lorem.generateWords(random(2, 4)),
  uuid: randomUUID(),
}));
