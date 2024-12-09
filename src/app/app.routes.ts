import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/public/login-page/login-page.component';
import { LayoutComponent } from './pages/private/layout/layout.component';
import { HomePageComponent } from './pages/private/home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'login-page',
    component: LoginPageComponent
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
        path: '',
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
