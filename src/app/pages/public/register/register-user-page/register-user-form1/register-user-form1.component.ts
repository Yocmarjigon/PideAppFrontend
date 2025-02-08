import { Component } from '@angular/core';
import { ImgTopComponent } from '../../../../../components/img-top/img-top.component';
import { InputTextComponent } from '../../../../../components/inputs/input-text/input-text.component';
import { ButtonComponent } from '../../../../../components/buttons/button/button.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-user-form1',
  standalone: true,
  imports: [RouterLink,ImgTopComponent, InputTextComponent, ButtonComponent],
  templateUrl: './register-user-form1.component.html',
  styleUrl: '../../styles/form-page-syles.scss',
})
export class RegisterUserForm1Component {
  
  constructor(
    private router: Router
  ){

  }
  nextForm(){
    this.router.navigate(["/register-user-form2"])
  }
}
