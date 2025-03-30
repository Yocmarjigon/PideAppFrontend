import { ErrorPageComponent } from './pages/public/error-page/error-page.component';
import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/public/login-page/login-page.component';
import { RegisterSelectPageComponent } from './pages/public/register/register-select-page/register-select-page.component';
import { RegisterUserForm1Component } from './pages/public/register/register-user-page/register-user-form1/register-user-form1.component';
import { RegisterUserForm2Component } from './pages/public/register/register-user-page/register-user-form2/register-user-form2.component';
import { RegisterDeliveryForm1Component } from './pages/public/register/register-delivery-page/register-delivery-form1/register-delivery-form1.component';
import { RegisterDeliveryForm2Component } from './pages/public/register/register-delivery-page/register-delivery-form2/register-delivery-form2.component';
import { LayoutComponent } from './pages/private/user/layout/layout.component';
import { HomePageComponent } from './pages/private/user/home-page/home-page.component';
import { CarPageComponent } from './pages/private/user/car-page/car-page.component';
import { PerfilPageComponent } from './pages/private/user/perfil-page/perfil-page.component';
import { OrderPageComponent } from './pages/private/user/order-page/order-page.component';
import { SearchPageComponent } from './pages/private/user/search-page/search-page.component';
import { LayoutAdminComponent } from './pages/private/admin/layout-admin/layout-admin.component';
import { ProductsPageComponent } from './pages/private/admin/products/products-page/products-page.component';
import { DescriptionProductPageComponent } from './pages/private/user/description-product-page/description-product-page.component';

export const routes: Routes = [
  {
    path: 'login-page',
    component: LoginPageComponent,
  },
  {
    path: 'register-page',
    component: RegisterSelectPageComponent,
  },
  {
    path: 'register-user-form1',
    component: RegisterUserForm1Component,
  },
  {
    path: 'register-user-form2',
    component: RegisterUserForm2Component,
  },
  {
    path: 'register-delivery-form1',
    component: RegisterDeliveryForm1Component,
  },
  {
    path: 'register-delivery-form2',
    component: RegisterDeliveryForm2Component,
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: 'home-page',
        component: HomePageComponent,
      },
      {
        path: 'car-page',
        component: CarPageComponent,
      },
      {
        path: 'perfil-page',
        component: PerfilPageComponent,
      },
      {
        path: 'order-page',
        component: OrderPageComponent,
      },
      {
        path: 'search-page',
        component: SearchPageComponent,
      },
      {
        path: '',
        redirectTo: '/layout/home-page',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: 'description-product-page',
    component: DescriptionProductPageComponent,
  },
  /* Rutas de las paginas administrativas */
  {
    path: 'layout-admin',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'product-page',
        component: ProductsPageComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/layout-admin/product-page',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/login-page',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];
