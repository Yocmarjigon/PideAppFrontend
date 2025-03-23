import { Component, OnInit } from '@angular/core';
import { ImgTopComponent } from '../../../../components/img-top/img-top.component';
import { ProductCardComponent } from '../../../../components/card/product-card/product-card.component';
import { Product } from 'src/app/models/Product';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { NgFor, NgIf } from '@angular/common';

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
      breakpoint: '800px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '600px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '300px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        title: 'Arepa de huevo',
        img: '/assets/images/arepa-de-huevo.jpeg',
        price: 2000,
      },
      {
        id: 2,
        title: 'Arepa de huevo',
        img: '/assets/images/arepa-de-huevo.jpeg',
        price: 2000,
      },
      {
        id: 3,
        title: 'Arepa de huevo',
        img: '/assets/images/arepa-de-huevo.jpeg',
        price: 2000,
      },
      {
        id: 4,
        title: 'Arepa de huevo',
        img: '/assets/images/arepa-de-huevo.jpeg',
        price: 2000,
      },
      {
        id: 5,
        title: 'Arepa de huevo',
        img: '/assets/images/arepa-de-huevo.jpeg',
        price: 2000,
      },
      {id: 6,
        title: 'Arepa de huevo',
        img: '/assets/images/arepa-de-huevo.jpeg',
        price: 2000,
      },
      {
        id: 7,
        title: 'Arepa de huevo',
        img: '/assets/images/arepa-de-huevo.jpeg',
        price: 2000,
      },
      {
        id: 8,
        title: 'Arepa de huevo',
        img: '/assets/images/arepa-de-huevo.jpeg',
        price: 2000,
      },
    ];
  }
}
