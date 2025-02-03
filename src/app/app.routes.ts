import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/public/login-page/login-page.component';
import { LayoutComponent } from './pages/private/layout/layout.component';
import { HomePageComponent } from './pages/private/home-page/home-page.component';
import { CarPageComponent } from './pages/private/car-page/car-page.component';
import { ProfilePageComponent } from './pages/private/profile-page/profile-page.component';
import { OrderPageComponent } from './pages/private/order-page/order-page.component';
import { SearchPageComponent } from './pages/private/search-page/search-page.component';
import { RegisterSelectPageComponent } from './pages/public/register/register-select-page/register-select-page.component';

import { DescriptionProductPageComponent } from './pages/private/description-product-page/description-product-page.component';
import { RegisterUserForm1Component } from './pages/public/register/register-user-page/register-user-form1/register-user-form1.component';
import { RegisterUserForm2Component } from './pages/public/register/register-user-page/register-user-form2/register-user-form2.component';
import { RegisterDeliveryForm1Component } from './pages/public/register/register-delivery-page/register-delivery-form1/register-delivery-form1.component';
import { RegisterDeliveryForm2Component } from './pages/public/register/register-delivery-page/register-delivery-form2/register-delivery-form2.component';

export const routes: Routes = [
  {
    path: 'login-page',
    component: LoginPageComponent
  },
  {
    path: 'register-page',
    component: RegisterSelectPageComponent
  },
  {
    path: 'register-user-form1',
    component: RegisterUserForm1Component
  },
  {
    path: "register-user-form2",
    component: RegisterUserForm2Component
  },
  {
    path: 'register-delivery-form1',
    component: RegisterDeliveryForm1Component
  },
  {
    path: 'register-delivery-form2',
    component: RegisterDeliveryForm2Component
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children:[
      {
        path: 'home-page',
        component: HomePageComponent
      },
      {
        path: 'car-page',
        component: CarPageComponent
      },
      {
        path: 'profile-page',
        component: ProfilePageComponent
      },
      {
        path: 'order-page',
        component: OrderPageComponent
      },
      {
        path: 'search-page',
        component: SearchPageComponent
      },
      {
        path: 'layout',
        redirectTo: '/home-page',
        pathMatch: "full"
      }
    ]
  },
  {
    path: 'description-product-page',
    component: DescriptionProductPageComponent
  },
  {
    path: '',
    redirectTo: '/login-page',
    pathMatch: "full"
  }
];
