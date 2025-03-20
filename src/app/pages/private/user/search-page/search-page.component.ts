import { Component } from '@angular/core';
import { ImgTopComponent } from '../../../../components/img-top/img-top.component';
import { Product } from 'src/app/models/Product';
import { ProductCardComponent } from '../../../../components/card/product-card/product-card.component';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    StyleClassModule,
    ImgTopComponent,
    ProductCardComponent,
    FormsModule

  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
})
export class SearchPageComponent {
  products: Product[] = [];
value: any;
  ngOnInit() {
    this.products = [
      {
        id: 1,
        nameProduct: 'Arepa de huevo',
        img: '/assets/images/arepa-de-huevo.jpeg',
        price: 2000,
      },
      {
        id: 2,
        nameProduct: 'Arepa de huevo',
        img: '/assets/images/arepa-de-huevo.jpeg',
        price: 2000,
      },
      {
        id: 3,
        nameProduct: 'Arepa de huevo',
        img: '/assets/images/arepa-de-huevo.jpeg',
        price: 2000,
      },
      {
        id: 4,
        nameProduct: 'Arepa de huevo',
        img: '/assets/images/arepa-de-huevo.jpeg',
        price: 2000,
      },
    ];
  }
}
