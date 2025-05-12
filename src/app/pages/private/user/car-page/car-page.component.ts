import { Component, OnInit, signal } from '@angular/core';
import { ImgTopComponent } from '../../../../components/img-top/img-top.component';
import { ButtonComponent } from '../../../../components/buttons/button/button.component';
import { ButtonCircleComponent } from '../../../../components/buttons/button-circle/button-circle.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { CarService } from 'src/app/service/car/car.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { CarGet } from 'src/app/models/Car/CarGet';
import { SpinnerComponent } from 'src/app/components/loading/spinner/spinner.component';
import { CarGetProduct } from 'src/app/models/Car/CarGetProduct';
import { ButtonModule } from 'primeng/button';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-car-page',
  standalone: true,
  imports: [
    FormsModule,
    InputNumberModule,
    ImgTopComponent,
    ButtonModule,
    SpinnerComponent,
    CurrencyPipe
  ],
  templateUrl: './car-page.component.html',
  styleUrl: './car-page.component.scss',
})
export class CarPageComponent implements OnInit {
  car: CarGet = {};
  products: CarGetProduct[] = [];
  subtotal = 0;
  total = 0;
  envio = 0;
  loadding = signal(false);
  constructor(
    private _carService: CarService,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this._carService.getCar().subscribe({
      next: res => {
        this.car = res;
        this.products = res.products!;
        this.loadding.set(true);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        this.loadding.set(false);
      },
    });
  }
}
