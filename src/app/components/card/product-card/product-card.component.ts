import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {

  @Input() product:Product ={
    title: '',
    price: 0,
    img: '',
    available: false,
    stock: 0
  }

  constructor() {}

  ngOnInit(){

  }


  routerSelectProduct() {


  }




}
