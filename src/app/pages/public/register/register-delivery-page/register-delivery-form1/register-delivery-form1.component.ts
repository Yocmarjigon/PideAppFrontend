import { Component } from '@angular/core';
import { ImgTopComponent } from '../../../../../components/img-top/img-top.component';
import { InputTextComponent } from '../../../../../components/inputs/input-text/input-text.component';
import { ButtonComponent } from '../../../../../components/buttons/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';

@Component({
  selector: 'app-register-delivery-form1',
  standalone: true,
  imports: [RouterLink,ImgTopComponent, InputTextComponent, ButtonComponent, InputTextModule, InputGroupAddon, InputGroupModule],
  templateUrl: './register-delivery-form1.component.html',
  styleUrl: '../../styles/form-page-syles.scss',
})
export class RegisterDeliveryForm1Component {

  constructor(
    private router: Router
  ){

  }

  nextForm() {
    this.router.navigate(["/register-delivery-form2"])
  }
}
