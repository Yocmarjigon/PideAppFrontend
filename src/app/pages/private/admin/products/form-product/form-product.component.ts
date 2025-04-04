import { Category } from 'src/app/models/Category';
import {
  Component,
  inject,
  Input,
  OnInit,
  Signal,
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
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/service/products/product.service';
import { InputNumberModule } from 'primeng/inputnumber';
import { Popover, PopoverModule } from 'primeng/popover';
import { CategoryService } from 'src/app/service/category/category.service';
import { ToastModule } from 'primeng/toast';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SelectModule } from 'primeng/select';
import { FilestorageService } from 'src/app/service/filestorage/filestorage.service';
import { SupabaseClient } from '@supabase/supabase-js';
import { SupabaseService } from 'src/app/service/supabase.service';
import { MenubarModule } from 'primeng/menubar';
import { NavBarBackComponent } from '../../../../../components/nav-bar/nav-bar-back/nav-bar-back.component';
@Component({
  selector: 'app-form-product',
  imports: [
    DropdownModule,
    FileUploadModule,
    DialogModule,
    ReactiveFormsModule,
    ButtonModule,
    ToggleSwitchModule,
    InputNumberModule,
    PopoverModule,
    ToastModule,
    SelectModule,
    FormsModule,
    MenubarModule,
    NavBarBackComponent,
  ],
  providers: [MessageService],
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.sass',
})
export class FormProductComponent implements OnInit {
  @ViewChild('op') op!: Popover;

  @Input() displayModal = signal(false);

  productForm: FormGroup;
  categoryForm: FormGroup;
  previewImageUrl: string | undefined = '';
  categories: Category[] = [];
  selectedFile!: File;
  private _supabaseClient = inject(SupabaseService).supabaseClient;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.productForm = fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      category: new FormControl('', Validators.required),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      img: new FormControl('', Validators.required),
    });

    this.categoryForm = fb.group({
      name: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }

  toggle(event: Event) {
    this.op.toggle(event);
  }

  async saveCategory() {
    try {
      const category = this.categoryForm.value as Category;
      const res = await this.categoryService.saveCategory(category);
      this.hideMessageCreateCategory();
      console.log(res);
    } catch {}
  }

  hideMessageCreateCategory() {
    this.messageService.add({
      severity: 'success',
      summary: 'Info',
      detail: 'La categoría se creo correctamente',
      life: 3000,
    });
  }

  onFileChange(event: any) {
    console.log(event.files[0]);

    console.log(event);
  }

  async saveProduct() {
    const product = this.productForm.value;
    product.category = product.category.idCategory
    console.log(product);


    this.productService.saveProducts(product).subscribe({
      next: (v) => {
        console.log(v);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  async getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (c) => {
        this.categories = c;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  async pickFromGallery() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos,
      });

      this.previewImageUrl = image.dataUrl;
      this.messageService.add({
        severity: 'success',
        summary: 'Imagen seleccionada',
        detail: 'La imagen se ha cargado correctamente',
      });
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se pudo cargar la imagen',
      });
    }
  }
}
