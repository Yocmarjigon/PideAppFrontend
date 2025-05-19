import { Category } from 'src/app/models/Category';
import {
  Component,
  inject,
  Input,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/service/products/product.service';
import { InputNumberModule } from 'primeng/inputnumber';
import { Popover, PopoverModule } from 'primeng/popover';
import { CategoryService } from 'src/app/service/category/category.service';
import { ToastModule } from 'primeng/toast';
import { SelectModule } from 'primeng/select';
import { SupabaseService } from 'src/app/service/supabase.service';
import { MenubarModule } from 'primeng/menubar';
import { NavBarBackComponent } from '../../../../../components/nav-bar/nav-bar-back/nav-bar-back.component';
import { ToggleButtonModule } from 'primeng/togglebutton';

import { Router } from '@angular/router';
import { MessageModule } from 'primeng/message';
import { MediaService } from 'src/app/service/utils/media.service';
@Component({
  selector: 'app-form-product',
  imports: [
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
    NavBarBackComponent,
    MessageModule,
  ],
  providers: [MessageService],
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.sass',
})
export class FormProductComponent implements OnInit {
  @ViewChild('op') op!: Popover;

  @Input() displayModal = signal(false);
  imgSelect: any;
  productForm: FormGroup;

  previewImageUrl: string | undefined = '';
  categories: Category[] = [];
  selectedFile!: File;
  private _supabaseClient = inject(SupabaseService).supabaseClient;
  checked: any;
  imageUrl: any = '';
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private _mediaService: MediaService
  ) {
    this.productForm = fb.group({
      title: new FormControl('', Validators.required),
      description: ['', [Validators.required]],
      category: new FormControl('', Validators.required),
      price: new FormControl(null, [Validators.required, Validators.min(100)]),
      available: [false],
      stock: ['', [Validators.required, Validators.min(1)]],
      img: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }

  onFileChange(event: any) {
    this.imgSelect = event.files[0];
  }

  async uploadImg() {
    if (!this.imgSelect) {
      return;
    }

    this.imageUrl = await this._mediaService.uploadImage(
      this.imgSelect,
      'productos'
    );
  }

  openCategoryForm() {
    this.router.navigateByUrl('/category-form');
  }
  async saveProduct() {
    await this.uploadImg();
    console.log(this.imageUrl);

    const { data } = this._supabaseClient.storage
      .from('imagenes')
      .getPublicUrl(this.imageUrl!);

    console.log(data.publicUrl);
    if (data.publicUrl) {

      const product = this.productForm.value;
      const productP = {
        description: product.description,
        img: data.publicUrl,
        price: product.price,
        title: product.title,
        stock: product.stock,
        available: product.available,
        category: product.category.idCategory,
      };
      console.log(productP);

      this.productService.saveProducts(productP).subscribe({
        next: v => {
          console.log(v);
          this.showMessageCreateProduct();
        },
        complete: () => {
          this.router.navigateByUrl('/layout-admin/product-admin-page');
        },
        error: e => {
          console.log(e);
        },
      });
    }
  }
  showMessageCreateProduct() {
    this.messageService.add({
      detail: 'El producto se creo correctamente',
      summary: 'Info',
      severity: 'success',
      life: 3000,
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: c => {
        this.categories = c;
      },
      error: e => {
        console.log(e);
      },
    });
  }
}
