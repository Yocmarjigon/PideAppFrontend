import { InputPasswordComponent } from './../../../components/inputs/input-password/input-password.component';
import { Component, signal } from '@angular/core';

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
import { SpinnerComponent } from 'src/app/components/loading/spinner/spinner.component';
import { ResponseCredential } from 'src/app/models/Responses/ResponseCredential';

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
    SpinnerComponent
  ],
  providers: [Validators, AuthService, MessageService],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent{
  public onVisual = false;
  public loading = signal(false);
  public showPassword = false;

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
    this.loading.set(true);
    this._authService.signIn(user).subscribe({
      next: (r: ResponseCredential) => {
        console.log(r);
        if (!r.accessToken || !r.refreshToken) return;
        const tokens = { accessToken: r.accessToken, refreshToken: r.refreshToken };
        this._authService.setTokens(tokens);

      },
      error: e => {
        this.exceptionHandler(e);
        this.loading.set(false);

      },
      complete: () => {
        const rol = this._authService.extractRole();
        console.log(rol);
        this._authService._isLogged.set(true);
        this._authService.redirect(rol!);
        this.loading.set(false);

      },
    });

  }

  exceptionHandler(e: any) {
    console.log(e.status);
    switch (e.status) {
      case 401:
        this._messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: e.error.message,
          life: 3000,
      })
        break;
      case 404:
        this._messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: e.error.message,
          life: 3000,
        })
        break;
    }
  }
  changeVisual() {
    this.onVisual = !this.onVisual;
    console.log(this.onVisual);
  }
}
