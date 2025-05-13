import { CarGetProduct } from "./CarGetProduct"

export interface CarGet{
  idCar?: string
  customer?: string
  products?: CarGetProduct[];
  subtotal?: number
  shipping?: number
  total?: number

}
