import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';

import { NavBarBackComponent } from 'src/app/components/nav-bar/nav-bar-back/nav-bar-back.component';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-category-page',
  imports: [
    NavBarBackComponent,
    DataViewModule,

    ButtonModule,
  ],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.sass',
})
export class CategoryPageComponent implements AfterViewInit {
confirmDelete($event: MouseEvent,arg1: any) {
throw new Error('Method not implemented.');
}
openDetailCategory(_t14: any) {
throw new Error('Method not implemented.');
}
  categories: Category[] = [];

  constructor(private _categoryService: CategoryService, private router: Router) {}

  ngAfterViewInit() {
    console.log('dsksdfjkl');
    this.getCategory();
  }

  openCategoryForm() {
    this.router.navigateByUrl("/category-form")
  }

  getCategory() {
    this._categoryService.getCategories().subscribe({
      next: (c) => {
        this.categories = c;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
