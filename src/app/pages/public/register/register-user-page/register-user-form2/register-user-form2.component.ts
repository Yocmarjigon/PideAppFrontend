import { InputPasswordComponent } from './../../../../../components/inputs/input-password/input-password.component';
import { Component } from '@angular/core';
import { ImgTopComponent } from '../../../../../components/img-top/img-top.component';
import { InputTextComponent } from '../../../../../components/inputs/input-text/input-text.component';
import { ButtonComponent } from '../../../../../components/buttons/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DataFormService } from 'src/app/service/utils/data-form.service';
import { ButtonModule } from 'primeng/button';
import { RegisterusersService } from 'src/app/service/registerusers/registerusers.service';
import { Client } from 'src/app/models/Client';
import { MessageService } from 'primeng/api';
import { ToastModule} from 'primeng/toast';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-register-user-form2',
  standalone: true,
  imports: [
    InputPasswordComponent,
    RouterLink,
    ImgTopComponent,
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    ToastModule
  ],
  providers: [Validators, MessageService],
  templateUrl: './register-user-form2.component.html',
  styleUrl: '../../styles/form-page-syles.scss',
})
export class RegisterUserForm2Component {
  formClient: FormGroup;
  formsControl: any = {};
  constructor(
    private fb: FormBuilder,
    private _dataFormService: DataFormService,
    private _registerUserService: RegisterusersService,
    private _router: Router,
    private _messageService: MessageService,
    private _authService: AuthService
  ) {

    this.formsControl = this._dataFormService.getSharedData();
    this.formClient = fb.group({
      name: this.formsControl.name,
      email: [''],
      password: [''],
      address: this.formsControl.address,
      phone: this.formsControl.phone,
    });
  }

  async registerUser() {
    console.log(this.formClient.value);
    const client = this.formClient.value as Client;

    const { data, error} = await this._authService.sinUp({email: client.email, password: client.password})
    if(error){
      return console.log(error)
    }else{
      console.log(data)
    }
    const { error: errorC}= await this._registerUserService.registerClient({id: data.user?.id,...client});

    if(!errorC){
      this._messageService.add({
        summary: 'Info',
        detail: 'Usuario registrado correctamente',
        life: 10000,
        severity: 'success',
      });
      setTimeout(()=>this._router.navigate(["/login-page"]),
      1500)

    }else{
      console.log(errorC)
    }
  }
}
