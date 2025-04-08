import { Component, Input, OnInit, signal, ViewChild } from '@angular/core';
import { NavBarBackComponent } from 'src/app/components/nav-bar/nav-bar-back/nav-bar-back.component';
import { ProductService } from 'src/app/service/products/product.service';
import { Product } from 'src/app/models/Product';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { Popover, PopoverModule } from 'primeng/popover';
import { SelectModule } from 'primeng/select';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CategoryService } from 'src/app/service/category/category.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { SendDataComponentsService } from 'src/app/service/utils/send-data-components.service';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-product-detail-page',
  imports: [
    NavBarBackComponent,
    DropdownModule,
    FileUploadModule,
    DialogModule,
    ReactiveFormsModule,
    ButtonModule,
    ToggleButtonModule,
    InputNumberModule,
    PopoverModule,
    ToastModule,
    SelectModule,
    FormsModule,
    MenubarModule,
    MessageModule,
    ToastModule,
    ConfirmDialogModule,
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.sass',
})
export class ProductDetailPageComponent {
  @ViewChild('op') op!: Popover;

  @Input() displayModal = signal(false);

  productForm: FormGroup;

  previewImageUrl: string | undefined = '';
  categories: Category[] = [];
  selectedFile!: File;

  checked: any;
  product: any = signal({});

  constructor(
    private _sendDataComponentService: SendDataComponentsService,
    private _productService: ProductService,
    private fb: FormBuilder,
    private _messageService: MessageService,
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private _confirmationService: ConfirmationService
  ) {
    this.productForm = fb.group({
      title: new FormControl('', Validators.required),
      description: ['', [Validators.required]],
      category: new FormControl('', Validators.required),
      price: new FormControl(0, [Validators.required, Validators.min(100)]),
      available: [false],
      stock: ['', [Validators.required, Validators.min(1)]],
      img: new FormControl(''),
    });
  }

  ngOnInit() {
    this.product.set(this._sendDataComponentService.getProduct()());
    console.log(this.product());
    this.setForm();
    this.getCategory();
  }

  getCategory() {
    this.categoryService.getCategories().subscribe({
      next: (c) => {
        this.categories = c;
      },
    });
  }
  confirmUpdate(event: Event) {
    this._confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Estas seguro que quieres actualizar el producto',
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
        this.updateProduct();
      },
      reject: () => {},
    });
  }

  showMessageUpdateProduct() {
    this._messageService.add({
      detail: 'El producto se actualizo correctamente',
      summary: 'Info',
      severity: 'success',
      life: 3000,
    });
  }

  openCategoryForm() {
    throw new Error('Method not implemented.');
  }
  updateProduct() {
    const product = this.productForm.value;

    const productP = {
      description: product.description,
      img: product.img,
      price: product.price,
      title: product.title,
      stock: product.stock,
      available: product.available,
      category: product.category.idCategory,
    };

       this._productService
      .updateProduct(this.product().idProduct, productP)
      .subscribe({
        next: (r) => {
          console.log(r);
          this.showMessageUpdateProduct();
        },
        error: (e) => {
          console.log(e);
        },
      });
  }
  setForm() {
    this.productForm.get('title')?.setValue(this.product().title);
    this.productForm.get('category')?.setValue(this.product().category);
    this.productForm.get('price')?.setValue(this.product().price);
    this.productForm.get('description')?.setValue(this.product().description);
    this.productForm.get('available')?.setValue(this.product().available);
    this.productForm.get('stock')?.setValue(this.product().stock);
  }
  onFileChange(event: any) {
    console.log(event.files[0]);

    console.log(event);
  }
}
