import { Component, OnInit, signal } from '@angular/core';
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
import { ProductService } from 'src/app/service/products/product.service';
import { Category } from 'src/app/models/Category';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { CategoryService } from 'src/app/service/category/category.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SendDataComponentsService } from 'src/app/service/utils/send-data-components.service';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
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
    InputGroupAddonModule,
    InputGroupModule,
    ConfirmDialogModule,
    ToastModule,
    ConfirmPopupModule,
    ConfirmDialogModule
  ],
  providers: [ConfirmationService, MessageService],
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
    private confirmationService: ConfirmationService,
    private _messageService: MessageService,
    private _sendDataComponentService: SendDataComponentsService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategory();
  }

  showMessageDeleteProduct() {
    this._messageService.add({
      detail: 'El producto se elimino correctamente',
      summary: 'Info',
      severity: 'success',
      life: 3000,
    });
  }

  productDelete(id: string) {
    this.productService.deleteProduct(id).subscribe({
      next: r => {
        console.log(r);

      },
      error: e => {
        console.log(e);
      },
      complete: () => {
        this.getProducts();
        this.showMessageDeleteProduct();
      },
    });
  }

  openDetailProuct(product: Product) {
    this.router.navigateByUrl('/product-detail-page');
    this._sendDataComponentService.setProduct(product);
  }

  confirmDelete(event: Event, id: string) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Estas seguro que quieres eliminar el producto',
      header: 'Confirmación',
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
        this.productDelete(id);
      },
      reject: () => {
        const overlays = document.querySelectorAll('.p-confirm-dialog-mask, .p-dialog-mask, .p-overlay');
        overlays.forEach(el => el.remove());

        // Quitar bloqueo de scroll (por si quedó)
        document.body.classList.remove('p-overflow-hidden');
      },
    });
  }

  onDialogHide() {
    // Quitar cualquier overlay que haya quedado pegado
    const overlays = document.querySelectorAll('.p-confirm-dialog-mask, .p-dialog-mask, .p-overlay');
    overlays.forEach(el => el.remove());

    // Quitar bloqueo de scroll (por si quedó)
    document.body.classList.remove('p-overflow-hidden');
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: p => {
        this.products = p;
      },
      error: e => {
        console.log(e);
      },
    });
  }

  getCategory() {
    this._categoryService.getCategories().subscribe({
      next: c => {
        this.categories = c;
      },
    });
  }

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
