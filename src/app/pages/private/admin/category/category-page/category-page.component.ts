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
import { DataViewLoadingComponent } from '../../../../../components/loading/data-view-loading/data-view-loading.component';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-category-page',
  imports: [
    NavBarBackComponent,
    DataViewModule,
    InputTextModule,
    InputGroupAddonModule,
    InputGroupModule,
    ButtonModule,
    DataViewLoadingComponent,
    ConfirmDialogModule
  ],
  providers: [ConfirmationService],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.sass',
})
export class CategoryPageComponent implements AfterViewInit {
  loading = signal(true);
  showModal = signal(true);
  categories: Category[] = [];

  constructor(
    private _categoryService: CategoryService,
    private router: Router,
    private readonly _confirmationService: ConfirmationService
  ) {}

  ngAfterViewInit() {
    console.log('dsksdfjkl');
    this.getCategory();
  }

  openCategoryForm() {
    this.router.navigateByUrl('/category-form');
  }

  confirmDelete(event: Event, id: string) {
    this._confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Estas seguro que quieres eliminar la categoria',
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
        this.deleteCategory(id);
      },
      reject: () => {
        this.onDialogHide();
      },
    });
  }

  onDialogHide() {
    this.showModal.set(false);
    // Quitar cualquier overlay que haya quedado pegado
    const overlays = document.querySelectorAll(
      '.p-confirm-dialog-mask, .p-dialog-mask, .p-overlay'
    );
    overlays.forEach(el => el.classList.add('hidden'));

    // Quitar bloqueo de scroll (por si quedó)
    document.body.classList.remove('p-overflow-hidden');
    setTimeout(() => this.showModal.set(true), 0);
  }

  deleteCategory(id: string) {
    this._categoryService.deleteCategory(id).subscribe({
      next: r => {
        console.log(r);
      },
      error: e => {
        console.log(e);
      },
      complete: () => {
        this.getCategory();
      },
    });
  }

  getCategory() {
    this._categoryService.getCategories().subscribe({
      next: c => {
        this.categories = c;
      },
      error: e => {
        console.log(e);
      },
      complete: () => {
        this.loading.set(false);
      },
    });
  }
}
