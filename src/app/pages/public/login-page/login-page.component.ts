import { InputPasswordComponent } from './../../../components/inputs/input-password/input-password.component';
import { Component, OnInit } from '@angular/core';
import { InputTextComponent } from '../../../components/inputs/input-text/input-text.component';
import { ButtonComponent } from '../../../components/buttons/button/button.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ImgTopComponent } from '../../../components/img-top/img-top.component';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    PasswordModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonComponent,
    FormsModule,
    ImgTopComponent,
    RouterLink,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    InputPasswordComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent implements OnInit {
  onVisual = false;
  loader = true;
  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  constructor(private readonly router: Router) {}
  async ngOnInit() {
    await this.data();
  }

  login() {
    this.router.navigateByUrl('/layout/home-page');
  }

  data(): Promise<boolean> {
    return new Promise((res) => {
      setTimeout(() => {
        res(false);
      }, 5000);
    });
  }

  changeVisual() {
    this.onVisual = !this.onVisual;
    console.log(this.onVisual);
  }
}
