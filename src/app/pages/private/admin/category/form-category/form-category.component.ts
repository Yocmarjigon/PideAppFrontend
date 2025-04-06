import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { NavBarBackComponent } from 'src/app/components/nav-bar/nav-bar-back/nav-bar-back.component';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-form-category',
  imports: [
    NavBarBackComponent,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule,
  ],
  providers: [MessageService, CategoryService],
  templateUrl: './form-category.component.html',
  styleUrl: './form-category.component.sass',
})
export class FormCategoryComponent {
  categoryForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _messageService: MessageService,
    private _categoryService: CategoryService,
    private router: Router
  ) {
    this.categoryForm = fb.group({
      name: [''],
    });
  }

  saveCategory() {
    const category = this.categoryForm.value;
    console.log(category);
    this._categoryService.saveCategory(category).subscribe(
      {
        next: (r)=>{
          console.log(r)
          this.hideMessageCreateCategory()
          this.hideMessageCreateCategory()
        },
        complete:()=>{
          this.router.navigateByUrl("/category-page")
        }
      }
    );

  }

  hideMessageCreateCategory() {
    this._messageService.add({
      severity: 'success',
      summary: 'Info',
      detail: 'La categoría se creo correctamente',
      life: 3000,
    });
  }
}
