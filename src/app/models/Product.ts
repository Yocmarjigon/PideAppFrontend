import { Category } from "./Category";

export interface Product{
  idProduct?:number;
  title?: string;
  description?: string;
  category?:Category;
  price: number;
  available: boolean;
  img: string,
  stock: number;
}
