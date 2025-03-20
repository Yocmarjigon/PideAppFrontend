import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-layout-admin',
  standalone: true,
  imports: [RouterOutlet, MenubarModule],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.scss',
})
export class LayoutAdminComponent {
  items: MenuItem[] = [
    {
      label: 'Producto',
      icon: 'pi pi-th-large',
      routerLink: '/layout-admin/product-page'
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
}
