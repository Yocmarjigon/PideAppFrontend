import { Component } from '@angular/core';
import { ImgTopComponent } from '../../../../../components/img-top/img-top.component';
import { InputTextComponent } from '../../../../../components/inputs/input-text/input-text.component';
import { ButtonComponent } from '../../../../../components/buttons/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-delivery-form2',
  standalone: true,
  imports: [RouterLink ,ImgTopComponent, InputTextComponent, ButtonComponent],
  templateUrl: './register-delivery-form2.component.html',
  styleUrl: '../../styles/form-page-syles.scss',
})
export class RegisterDeliveryForm2Component {
  registerDelivery() {}
}
