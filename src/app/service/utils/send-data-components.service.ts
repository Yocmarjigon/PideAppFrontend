import { Injectable, signal } from '@angular/core';
import { CarGet } from 'src/app/models/Car/CarGet';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class SendDataComponentsService {
  idProduct = signal({})
  car = signal<CarGet>({})
  constructor() { }

  getProduct(){
    return this.idProduct.asReadonly()
  }
  setDataCar(car: CarGet){
    this.car.set(car)
  }
  getDataCar(){
    return this.car.asReadonly()
  }
  setProduct(product: Product){
    this.idProduct.set(product)
  }
}
