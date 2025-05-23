import { Component, signal } from '@angular/core';
import { NavBarBackComponent } from '../../../../components/nav-bar/nav-bar-back/nav-bar-back.component';
import { CurrencyPipe } from '@angular/common';
import { Product } from 'src/app/models/Product';
import { CustomerService } from 'src/app/service/customer/customer.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { CarService } from 'src/app/service/car/car.service';
import { SendDataComponentsService } from 'src/app/service/utils/send-data-components.service';
import { CarGetProduct } from 'src/app/models/Car/CarGetProduct';
import { FileUploadModule } from 'primeng/fileupload';
import { MediaService } from 'src/app/service/utils/media.service';
import { OrderService } from 'src/app/service/order/order.service';
import { OrderSave } from 'src/app/models/Order/OrderSave';
import { CarGet } from 'src/app/models/Car/CarGet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-page',
  imports: [NavBarBackComponent, CurrencyPipe, FileUploadModule],
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
  imageUrl: any = '';
  imgSelect: any;
  car: CarGet = {};
  constructor(
    private readonly _customerService: CustomerService,
    private readonly _authService: AuthService,
    private readonly _sendDataService: SendDataComponentsService,
    private readonly _mediaService: MediaService,
    private readonly _orderService: OrderService,
    private readonly router: Router
  ) {
    this.getProducts();
    this.getAddress();
  }
  getProducts() {
    this.car = this._sendDataService.getDataCar()();
    this.total = this.car.total!;
    this.products = this.car.products!;
  }

  getAddress() {
    this.userId = this._authService.extractUserId()!;
    this._customerService.getIdCustomer(this.userId).subscribe({
      next: res => {
        this.address = res.address!;
      },
    });
  }
  async uploadImg() {
    if (!this.imgSelect) {
      return;
    }

    this.imageUrl = await this._mediaService.uploadImage(
      this.imgSelect,
      'productos'
    );
  }

  onFileChange(event: any) {
    this.imgSelect = event.files[0];
  }

  buy() {
    /* await this.uploadImg() */
    const order: OrderSave = {
      customer: this.userId,
      receiptImg: 'sdd',
      car: this.car.idCar,
    };
    console.log(order);

    this._orderService.saveOrder(order).subscribe({
      next: res => {
        console.log(res);
      },
      error: e => {
        console.log(e);
      },
      complete:()=>{
        this.router.navigate(["/layout/order-page"])
      }

    });
  }
}
