import { Component, OnInit } from '@angular/core';
import { ImgTopComponent } from '../../../../components/img-top/img-top.component';
import { ButtonComponent } from '../../../../components/buttons/button/button.component';
import { ButtonCircleComponent } from '../../../../components/buttons/button-circle/button-circle.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { CarService } from 'src/app/service/car/car.service';

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
export class CarPageComponent implements OnInit {
  cars: any[] = [];
  constructor(private _carService: CarService) {}

  ngOnInit(): void {
    this._carService.getCar().subscribe((res) => {
      this.cars = res;
    });
  }


}
