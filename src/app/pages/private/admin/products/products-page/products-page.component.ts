import { Component, OnInit, Signal, computed, signal } from '@angular/core';
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
import { ProductService } from 'src/app/service/products/product.service';
import { Category } from 'src/app/models/Category';
import { InputGroupAddon, InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';

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
    InputGroupAddonModule,
    InputGroupModule
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent implements OnInit{

  openModal = signal(false);
  valuePriceFilter = 0;
  products: Signal<Product[]> = signal([]);

   //Lista de categoría
  categories: Signal<Category[]> = signal([])

  // Filtros
  filters = signal({
    name: '',
    category: null,
    price: 100, // Precio máximo inicial
  });


  constructor(
    private readonly productService: ProductService
  ){

  }

  ngOnInit(): void {
    console.log(this.productService.getProducts)
  }

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
