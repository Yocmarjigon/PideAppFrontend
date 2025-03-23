import { Component, Signal, computed, signal } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormProductComponent } from '../form-product/form-product.component';

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
    CommonModule,
    DataViewModule,
    ButtonModule,
    FormsModule,
    SliderModule,
    InputNumberModule,
    FormProductComponent,
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent {
  openModal = signal(false);
  valuePriceFilter = 0;
  products: Signal<Product[]> = signal([
    {
      id: 1,
      title: 'Manzanas',
      description: 'Manzanas rojas frescas y jugosas.',
      category: 'Frutas',
      available: true,
      price: 2.5,
      img: '/assets/images/arepa-de-huevo.jpeg',
    },
    {
      id: 2,
      title: 'Agua Mineral',
      description: 'Agua mineral natural en botella de 1 litro.',
      category: 'Bebidas',
      available: true,
      price: 1.0,
      img: '/assets/images/arepa-de-huevo.jpeg',
    },
    {
      id: 3,
      title: 'Pan Integral',
      description:
        'Pan integral recién horneado, ideal para dietas saludables.',
      category: 'Panadería',
      available: true,
      price: 3.0,
      img: '/assets/images/arepa-de-huevo.jpeg',
    },
    {
      id: 4,
      title: 'Yogur Natural',
      description: 'Yogur natural sin azúcar añadida, 500 ml.',
      category: 'Lácteos',
      available: true,
      price: 1.8,
      img: '/assets/images/arepa-de-huevo.jpeg',
    },
    {
      id: 5,
      title: 'Café Molido',
      description: 'Café molido 100% arábica, paquete de 250 gramos.',
      category: 'Bebidas',
      available: true,
      price: 5.5,
      img: '/assets/images/arepa-de-huevo.jpeg',
    },
    {
      id: 6,
      title: 'Pasta de Trigo Integral',
      description: 'Pasta de trigo integral, paquete de 500 gramos.',
      category: 'Alimentos Secos',
      available: true,
      price: 2.0,
      img: '/assets/images/arepa-de-huevo.jpeg',
    },
  ]);

  // Filtros
  filters = signal({
    name: '',
    category: null,
    price: 100, // Precio máximo inicial
  });

  // Categorías para el dropdown
  categories = [
    { name: 'Frutas', value: 'Frutas' },
    { name: 'Bebidas', value: 'Bebidas' },
    { name: 'Panadería', value: 'Panadería' },
    { name: 'Lácteos', value: 'Lácteos' },
    { name: 'Alimentos Secos', value: 'Alimentos Secos' },
  ];

  // Productos filtrados
  filteredProducts = computed(() => {
    return this.products().filter((product) => {
      if (product.title != undefined) {
        const matchesName = product.title
          .toLowerCase()
          .includes(this.filters().name.toLowerCase());
        const matchesCategory = this.filters().category
          ? product.category === this.filters().category
          : true;
        const matchesPrice = product.price <= this.filters().price;
        return matchesName && matchesCategory && matchesPrice;
      }
      return '';
    });
  });

  handleOpenModal() {
   this.openModal.set(true)
  }

  // Función para aplicar filtros (se llama automáticamente al cambiar los filtros)
  applyFilter() {
    // No es necesario hacer nada aquí, ya que `filteredProducts` es una señal computada
  }
}
