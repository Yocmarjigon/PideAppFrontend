export interface Product{
  id?:number;
  title?: string;
  description?: string;
  category?:string;
  available?: boolean;
  price: number;
  stock?: number;
  img: string,
}
