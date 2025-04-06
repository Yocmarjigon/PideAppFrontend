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
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {
  InputGroupAddon,
  InputGroupAddonModule,
} from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { CategoryService } from 'src/app/service/category/category.service';
import { Router } from '@angular/router';
import { CardCustomComponent } from '../../../../../components/card/card-custom/card-custom.component';
import { ConfirmationService } from 'primeng/api';

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
    InputGroupModule,
    CardCustomComponent,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent implements OnInit {
  valuePriceFilter = 0;
  products: Product[] = [];

  //Lista de categoría
  categories: Category[] = [];

  // Filtros
  filters = signal({
    name: '',
    category: null,
    price: 100, // Precio máximo inicial
  });

  constructor(
    private readonly productService: ProductService,
    private _categoryService: CategoryService,
    private router: Router,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategory();
  }

  confirmDelete(event: Event) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Estas seguro que quieres eliminar el producto',
        header: 'Confirmacion',
        closable: true,
        closeOnEscape: true,
        icon: 'pi pi-exclamation-triangle',
        rejectButtonProps: {
            label: 'Cancelar',
            severity: 'secondary',
            outlined: true,
        },
        acceptButtonProps: {
            label: 'Confirmar',
        },
        accept: () => {

        },
        reject: () => {

        },
    });
}

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (p) => {
        this.products = p;
        console.log(p);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  getCategory() {
    this._categoryService.getCategories().subscribe({
      next: (c) => {
        this.categories = c;
      },
    });
  }

  // Productos filtrados
  /* filteredProducts = computed(() => {
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
  }); */

  openProductsForm() {
    this.router.navigateByUrl('/product-form');
  }

  openCategoryPage() {
    this.router.navigateByUrl('/category-page');
  }
  // Función para aplicar filtros (se llama automáticamente al cambiar los filtros)
  applyFilter() {
    // No es necesario hacer nada aquí, ya que `filteredProducts` es una señal computada
  }
}
