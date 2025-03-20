import { Component } from '@angular/core';
import { ImgTopComponent } from '../../../../components/img-top/img-top.component';
import { ButtonComponent } from '../../../../components/buttons/button/button.component';
import { ButtonCircleComponent } from '../../../../components/buttons/button-circle/button-circle.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-page',
  standalone: true,
  imports: [
    FormsModule,
    InputNumberModule,
    ImgTopComponent,
    ButtonComponent,
    ButtonCircleComponent,
  ],
  templateUrl: './car-page.component.html',
  styleUrl: './car-page.component.scss',
})
export class CarPageComponent {
  total = 5000;
  value = 1;
}
