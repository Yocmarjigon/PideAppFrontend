import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { InputNumberModule } from 'primeng/inputnumber';
import { StyleClassModule } from 'primeng/styleclass';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { NavBarBackComponent } from "../../../../components/nav-bar/nav-bar-back/nav-bar-back.component";
import { SendDataComponentsService } from 'src/app/service/utils/send-data-components.service';
import { ProductService } from 'src/app/service/products/product.service';
import { CurrencyPipe } from '@angular/common';
import { CarService } from 'src/app/service/car/car.service';

@Component({
  selector: 'app-description-product-page',
  standalone: true,
  imports: [StyleClassModule, RouterLink, InputNumberModule, FormsModule, ButtonModule, NavBarBackComponent, CurrencyPipe],
  providers: [SendDataComponentsService],
  templateUrl: './description-product-page.component.html',
  styleUrl: './description-product-page.component.scss',
})
export class DescriptionProductPageComponent implements OnInit {
  public product: Product;
  public loading = signal(false);
  quantity = 1;
  constructor(
    private route: ActivatedRoute,
    private _productService: ProductService,
    private _carService: CarService
  ){
    this.product= {
      idProduct: '',
      title: '',
      description: '',
      img: '',
      price: 0,
      stock: 0,
      available: false
    }
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      console.error('No se proporcionó un ID de producto válido.');
      return;
    }
    this._productService.getProductById(id).subscribe({
      next: (p) => {
        this.product = p;
      },
      error: (e) => {
        console.log(e);
      },
    });

  }
  addToCart() {
    this._carService.saveCarProduct({ idProduct: this.product.idProduct, amount: this.quantity })
  }
}
