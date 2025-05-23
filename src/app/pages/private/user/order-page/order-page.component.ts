import { Component } from '@angular/core';
import { ImgTopComponent } from '../../../../components/img-top/img-top.component';
import { ButtonCircleComponent } from '../../../../components/buttons/button-circle/button-circle.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [FormsModule,InputNumberModule, ImgTopComponent, ButtonCircleComponent],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.scss',
})
export class OrderPageComponent {
  total = 5000;
  value = 1


}
