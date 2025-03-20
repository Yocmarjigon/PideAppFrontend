import { TableModule } from 'primeng/table';
import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    TableModule,
    TagModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    MultiSelectModule,
    DropdownModule,
    HttpClientModule,
    CommonModule,
    DataViewModule,
    ButtonModule
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent {
  product: any[] | undefined;
  layout: string = 'list';
  loading: boolean = false;

  products: Product[] = [
    {
      id: 1,
      nameProduct: 'Manzanas',
      description: 'Manzanas rojas frescas y jugosas.',
      category: 'Frutas',
      availability: 'Disponible',
      price: 2.5,
      img: '/assets/images/arepa-de-huevo.jpeg',
    },
    {
      id: 2,
      nameProduct: 'Agua Mineral',
      description: 'Agua mineral natural en botella de 1 litro.',
      category: 'Bebidas',
      availability: 'Disponible',
      price: 1.0,
      img: '/assets/images/arepa-de-huevo.jpeg'
    },
    {
      id: 3,
      nameProduct: 'Pan Integral',
      description:
        'Pan integral recién horneado, ideal para dietas saludables.',
      category: 'Panadería',
      availability: 'Disponible',
      price: 3.0,
      img: '/assets/images/arepa-de-huevo.jpeg'
    },
    {
      id: 4,
      nameProduct: 'Yogur Natural',
      description: 'Yogur natural sin azúcar añadida, 500 ml.',
      category: 'Lácteos',
      availability: 'Agotado',
      price: 1.8,
      img: '/assets/images/arepa-de-huevo.jpeg'
    },
    {
      id: 5,
      nameProduct: 'Café Molido',
      description: 'Café molido 100% arábica, paquete de 250 gramos.',
      category: 'Bebidas',
      availability: 'Disponible',
      price: 5.5,
      img: '/assets/images/arepa-de-huevo.jpeg'
    },
    {
      id: 6,
      nameProduct: 'Pasta de Trigo Integral',
      description: 'Pasta de trigo integral, paquete de 500 gramos.',
      category: 'Alimentos Secos',
      availability: 'Disponible',
      price: 2.0,
      img: '/assets/images/arepa-de-huevo.jpeg'
    },
  ];
}
