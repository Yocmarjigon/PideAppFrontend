import { Component, OnInit } from '@angular/core';
import { ImgTopComponent } from '../../../../components/img-top/img-top.component';
import { ProductCardComponent } from '../../../../components/card/product-card/product-card.component';
import { Product } from 'src/app/models/Product';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { NgFor, NgIf } from '@angular/common';
import { ProductService } from 'src/app/service/products/product.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    ImgTopComponent,
    ProductCardComponent,
    NgFor,
    CarouselModule,
    ButtonModule,
    TagModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  products: Product[] = [];
  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService.getProducts().subscribe({
      next: (p) => {
        this.products = p;
      },
      error: (e) => {
        console.log(e);
      },
    });
    this.products = [];
  }
}
