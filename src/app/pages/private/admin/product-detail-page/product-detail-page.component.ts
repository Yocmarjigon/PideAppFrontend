import { DescriptionSendDataComponentService } from 'src/app/service/utils/description-send-data-component.service';
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
import { ToastModule } from 'primeng/toast';
import { SelectModule } from 'primeng/select';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { CategoryService } from 'src/app/service/category/category.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category';

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
  ],
  providers: [MessageService],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.sass',
})
export class ProductDetailPageComponent {
openCategoryForm() {
throw new Error('Method not implemented.');
}
updateProduct() {
throw new Error('Method not implemented.');
}
  @ViewChild('op') op!: Popover;

  @Input() displayModal = signal(false);

  productForm: FormGroup;

  previewImageUrl: string | undefined = '';
  categories: Category[] = [];
  selectedFile!: File;

  checked: any;
  product!: Product;
  constructor(
    private _descriptionSendDataService: DescriptionSendDataComponentService,
    private _productService: ProductService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
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
    this._descriptionSendDataService.idData.subscribe({
      next: (v) => {
        this._productService.getProductById(v).subscribe({
          next: (p) => {
            this.product = p;
            console.log(this.product);
            this.setForm()
          },
        });
      },
      complete: () => {},
    });

  }
  setForm(){
    this.productForm.get("title")?.setValue(this.product.title)
    this.productForm.get("category")?.setValue(this.product.category?.name)
    this.productForm.get("price")?.setValue(this.product.price)
    this.productForm.get("description")?.setValue(this.product.description)
    this.productForm.get("available")?.setValue(this.product.available)
    this.productForm.get("stock")?.setValue(this.product.stock)
  }
  onFileChange(event: any) {
    console.log(event.files[0]);

    console.log(event);
  }
}
