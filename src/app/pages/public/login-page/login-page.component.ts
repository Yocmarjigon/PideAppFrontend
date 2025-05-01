import { InputPasswordComponent } from './../../../components/inputs/input-password/input-password.component';
import { Component, effect } from '@angular/core';

import {
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
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DataFormService } from 'src/app/service/utils/data-form.service';

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
    ToastModule,
  ],
  providers: [Validators, AuthService, MessageService],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent{
  onVisual = false;
  loader = true;
  showPassword = false;

  formLogin: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private readonly _authService: AuthService,
    private _messageService: MessageService,
    private _dataFormService: DataFormService,
    private router: Router
  ) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  login() {
    const user = this.formLogin.value;

    this._authService.signIn(user);


  }
  changeVisual() {
    this.onVisual = !this.onVisual;
    console.log(this.onVisual);
  }
}
