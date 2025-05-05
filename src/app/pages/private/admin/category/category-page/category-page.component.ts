import { AfterViewInit, Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';

import { NavBarBackComponent } from 'src/app/components/nav-bar/nav-bar-back/nav-bar-back.component';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/service/category/category.service';
import { DataViewLoadingComponent } from "../../../../../components/loading/data-view-loading/data-view-loading.component";

@Component({
  selector: 'app-category-page',
  imports: [
    NavBarBackComponent,
    DataViewModule,
    InputTextModule,
    InputGroupAddonModule,
    InputGroupModule,
    ButtonModule,
    DataViewLoadingComponent
],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.sass',
})
export class CategoryPageComponent implements AfterViewInit {
  loading = signal(true);
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
      complete: () => {
        this.loading.set(false);
      },
    });
  }
}
