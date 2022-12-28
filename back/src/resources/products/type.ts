console.log("Products:Types");

import { UUID } from "../../types";

export type Product = {
  price: number;
  title: string;
  uuid: UUID;
};

export interface ProductColumn extends Product {
  createdAt: string;
  modifiedAt: string;
  rowId: number;
}
