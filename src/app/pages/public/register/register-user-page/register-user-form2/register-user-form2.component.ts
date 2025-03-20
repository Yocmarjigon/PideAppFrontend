import { InputPasswordComponent } from './../../../../../components/inputs/input-password/input-password.component';
import { Component } from '@angular/core';
import { ImgTopComponent } from "../../../../../components/img-top/img-top.component";
import { InputTextComponent } from "../../../../../components/inputs/input-text/input-text.component";
import { ButtonComponent } from "../../../../../components/buttons/button/button.component";
import { RouterLink } from '@angular/router';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-register-user-form2',
  standalone: true,
  imports: [InputPasswordComponent,RouterLink,ImgTopComponent, InputTextComponent, ButtonComponent, InputGroupModule, InputGroupAddonModule, InputTextModule],
  templateUrl: './register-user-form2.component.html',
  styleUrl: '../../styles/form-page-syles.scss'
})
export class RegisterUserForm2Component {
registerUser(){

}

}
