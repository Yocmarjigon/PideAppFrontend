import { Component, OnInit } from '@angular/core';
import { NavBarBackComponent } from "../../../../components/nav-bar/nav-bar-back/nav-bar-back.component";
import { ProductService } from 'src/app/service/products/product.service';
import { Product } from 'src/app/models/Product';
import { ProductCardComponent } from "../../../../components/card/product-card/product-card.component";

@Component({
  selector: 'app-arepa-page',
  imports: [NavBarBackComponent, ProductCardComponent],
  templateUrl: './arepa-page.component.html',
  styleUrl: './arepa-page.component.sass'
})
export class ArepaPageComponent implements OnInit {

  products: Product[] = [];
  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit() {
    this._productService.getProductsByCategory('arepa').subscribe((data) => (this.products = data));
  }

}
