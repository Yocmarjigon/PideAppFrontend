import { Component } from '@angular/core';
import { NavBarBackComponent } from '../../../../components/nav-bar/nav-bar-back/nav-bar-back.component';
import { CurrencyPipe } from '@angular/common';
import { Product } from 'src/app/models/Product';
import { CustomerService } from 'src/app/service/customer/customer.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { CarService } from 'src/app/service/car/car.service';
import { SendDataComponentsService } from 'src/app/service/utils/send-data-components.service';
import { CarGetProduct } from 'src/app/models/Car/CarGetProduct';

@Component({
  selector: 'app-sale-page',
  imports: [NavBarBackComponent, CurrencyPipe],
  templateUrl: './sale-page.component.html',
  styleUrl: './sale-page.component.sass',
})
export class SalePageComponent {
  total = 0;
  shipping = 0;
  subtotal = 0;
  address = 'Calle 123, Ciudad, Estado, País';
  products: CarGetProduct[] = [];
  userId = '';

  constructor(
    private readonly _customerService: CustomerService,
    private readonly _authService: AuthService,
    private readonly _sendDataService: SendDataComponentsService
  ) {
    this.getProducts();
    this.getAddress();
  }
  getProducts() {
    const car = this._sendDataService.getDataCar();
    this.total = car().total!;
    this.products = car().products!;
  }

  getAddress() {
    this.userId = this._authService.extractUserId()!;
    this._customerService.getIdCustomer(this.userId).subscribe({
      next: res => {
        this.address = res.address!;
      },
    });
  }

  buy() {}
}
