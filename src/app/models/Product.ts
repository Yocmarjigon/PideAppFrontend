import { Category } from "./Category";

export interface Product{
  idProduct?:string;
  title?: string;
  description?: string;
  category?:Category;
  price: number;
  available: boolean;
  img: string,
  stock: number;
}
