import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AuthService } from 'src/app/service/auth/auth.service';
@Component({
  selector: 'app-layout-admin',
  standalone: true,
  imports: [
    RouterOutlet,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
    CommonModule,
    ButtonModule
  ],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.scss',
})
export class LayoutAdminComponent {
  items: MenuItem[] = [
    {
      label: 'Producto',
      icon: 'pi pi-th-large',
      routerLink: '/layout-admin/product-page',
    },
    {
      label: 'Pedidos',
      icon: 'pi pi-reply',
    },
    {
      label: 'Ventas',
      icon: 'pi pi-shopping-bag',
    },
    {
      label: 'Perfil',
      icon: 'pi pi-user',
    },
  ];

  constructor(
    private _authService: AuthService,
    private router: Router
  ){}

  async signOut(){
    await this._authService.signOut()
    this.router.navigateByUrl("/login-page")
  }
}
