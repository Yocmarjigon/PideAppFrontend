import { Component, OnInit, signal } from '@angular/core';
import { ImgTopComponent } from '../../../../components/img-top/img-top.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { CarService } from 'src/app/service/car/car.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { CarGet } from 'src/app/models/Car/CarGet';
import { SpinnerComponent } from 'src/app/components/loading/spinner/spinner.component';
import { CarGetProduct } from 'src/app/models/Car/CarGetProduct';
import { ButtonModule } from 'primeng/button';
import { CurrencyPipe } from '@angular/common';
import { CarProduct } from 'src/app/models/Car/CarProduct';
import { Router } from '@angular/router';
import { SendDataComponentsService } from 'src/app/service/utils/send-data-components.service';

@Component({
  selector: 'app-car-page',
  standalone: true,
  imports: [
    FormsModule,
    InputNumberModule,
    ImgTopComponent,
    ButtonModule,
    SpinnerComponent,
    CurrencyPipe,
  ],
  templateUrl: './car-page.component.html',
  styleUrl: './car-page.component.scss',
})
export class CarPageComponent implements OnInit {
  car: CarGet = {};
  products: CarGetProduct[] = [];
  subtotal = 0;
  total = 0;
  shipping = 0;
  loadding = signal(false);

  constructor(
    private _carService: CarService,
    private _authService: AuthService,
    private router: Router,
    private _sendDataService: SendDataComponentsService
  ) {}

  ngOnInit(): void {
    this.getCar();
  }

  getCar() {
    this.loadding.set(true);
    this._carService.getCar().subscribe({
      next: res => {
        this.car = res;
        this.products = res.products!;
        this.subtotal = res.subtotal!;
        this.total = res.total!;
        this.shipping = res.shipping!;
      },
      error: err => {
        console.log(err);
        this.loadding.set(false);
      },
      complete: () => {
        this.loadding.set(false);
      },
    });
  }

  confirmBuy() {
    const car = {
      products: this.products,
      total: this.total,
      shipping: this.shipping,
      subtotal: this.subtotal,
    };
    this._sendDataService.setDataCar(car);
    this.router.navigate(['/layout/sale-page']);
  }
  updateCar(product: CarProduct, amount: number) {
    product.amount = amount;

    this._carService.saveCarProduct(product);
    this.total = this.getTotal();
  }

  getTotal() {
    let total = 0;
    this.products.forEach(p => {
      total += p.price * p.amount!;
    });
    return total;
  }

  deleteProduct(product: CarProduct) {
    this.products = this.products.filter(
      p => p.idProduct !== product.idProduct
    );
    this.total = this.getTotal();
    this._carService.removeCarProduct(product.idProduct!);
  }
}
