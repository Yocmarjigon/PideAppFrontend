import { CarProduct } from "./CarProduct";

export interface CarSave {
  customer?: string;
  products?: CarProduct[];
}
