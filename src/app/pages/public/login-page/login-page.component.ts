import { InputPasswordComponent } from './../../../components/inputs/input-password/input-password.component';
import { Component, effect, OnInit } from '@angular/core';
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
export class LoginPageComponent implements OnInit {
  onVisual = false;
  loader = true;
  showPassword = false;

  formLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private readonly _authService: AuthService,
    private _messageService: MessageService,
    private _dataFormService: DataFormService,
    private _router: Router
  ) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async ngOnInit() {
    await this.data();
  }

  async login() {
    const user = this.formLogin.value;
    const { data, error } = await this._authService.signIn(user);
    const rol = await this._authService.obtenerRolUsuario(data.user?.id!);

    if (!error) {
      console.log(data);
      this.redirect(rol);
    } else {
    }
  }

  redirect(rol: string) {
    switch (rol) {
      case 'CLIENTEUSER':
        this._router.navigateByUrl('/layout/home-page');
        break;
      case 'ADMINUSER':
        this._router.navigateByUrl('/layout-admin');
        break;
    }
  }

  data() {}

  changeVisual() {
    this.onVisual = !this.onVisual;
    console.log(this.onVisual);
  }
}
