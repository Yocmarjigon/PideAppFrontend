import { Injectable, signal } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class SendDataComponentsService {
  idProduct = signal({})
  constructor() { }

  getProduct(){
    return this.idProduct.asReadonly()
  }
  setProduct(product: Product){
    this.idProduct.set(product)
  }
}
