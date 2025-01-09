import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/public/login-page/login-page.component';
import { LayoutComponent } from './pages/private/layout/layout.component';
import { HomePageComponent } from './pages/private/home-page/home-page.component';
import { CarPageComponent } from './pages/private/car-page/car-page.component';
import { ProfilePageComponent } from './pages/private/profile-page/profile-page.component';
import { OrderPageComponent } from './pages/private/order-page/order-page.component';
import { SearchPageComponent } from './pages/private/search-page/search-page.component';
import { RegisterSelectPageComponent } from './pages/public/register/register-select-page/register-select-page.component';
import { RegisterUserPageComponent } from './pages/public/register/register-user-page/register-user-page.component';
import { RegisterDeliveryPageComponent } from './pages/public/register/register-delivery-page/register-delivery-page.component';

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
    path: 'register-user-page',
    component: RegisterUserPageComponent
  },
  {
    path: 'register-delivery-page',
    component: RegisterDeliveryPageComponent
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
    path: '',
    redirectTo: '/login-page',
    pathMatch: "full"
  }
];
