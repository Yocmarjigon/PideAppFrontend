import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/public/login-page/login-page.component';
import { LayoutComponent } from './pages/private/layout/layout.component';
import { HomePageComponent } from './pages/private/home-page/home-page.component';
import { RegisterPageComponent } from './pages/public/register-page/register-page.component';
import { CarPageComponent } from './pages/private/car-page/car-page.component';
import { ProfilePageComponent } from './pages/private/profile-page/profile-page.component';
import { OrderPageComponent } from './pages/private/order-page/order-page.component';
import { SearchPageComponent } from './pages/private/search-page/search-page.component';

export const routes: Routes = [
  {
    path: 'login-page',
    component: LoginPageComponent
  },
  {
    path: 'register-page',
    component: RegisterPageComponent
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
