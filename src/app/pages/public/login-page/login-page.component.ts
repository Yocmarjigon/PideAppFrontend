import { InputPasswordComponent } from './../../../components/inputs/input-password/input-password.component';
import { Component, OnInit } from '@angular/core';
import { InputTextComponent } from '../../../components/inputs/input-text/input-text.component';
import { ButtonComponent } from '../../../components/buttons/button/button.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ImgTopComponent } from '../../../components/img-top/img-top.component';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MessageModule,
    PasswordModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    FormsModule,
    ImgTopComponent,
    RouterLink,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    InputPasswordComponent,
    ReactiveFormsModule,
  ],
  providers: [Validators, AuthService],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent implements OnInit {
  onVisual = false;
  loader = true;
  showPassword = false;

  formLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private readonly authService: AuthService) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


  async ngOnInit() {
    await this.data();
  }


  async login() {
    const user = this.formLogin.value;
    const res = await this.authService.singIn(user);
    console.log(res);
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
