import { Component } from '@angular/core';
import { InputTextComponent } from '../../../../components/inputs/input-text/input-text.component';
import { ButtonComponent } from '../../../../components/buttons/button/button.component';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-page',
  standalone: true,
  imports: [
    InputTextModule,
    InputTextComponent,
    ButtonComponent,
    InputGroupAddonModule,
    InputGroupModule,
  ],
  templateUrl: './perfil-page.component.html',
  styleUrl: '/src/app/pages/public/register/styles/form-page-syles.scss',
})
export class PerfilPageComponent {
  constructor(
    private router: Router
  ) {}
  signOut() {
    localStorage.clear();
    this.router.navigateByUrl("/login-page")
  }
}
