import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import enviroment_export from 'src/app/enviroment_back';
import { CarProduct } from 'src/app/models/Car/CarProduct';
import { CarSave } from 'src/app/models/Car/CarSave';
import { Response } from 'src/app/models/Responses/Responses';
import { AuthService } from '../auth/auth.service';
import { CarGet } from 'src/app/models/Car/CarGet';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private url = `${enviroment_export}/car`;
  private carProducts: CarProduct[] = [];
  constructor(private http: HttpClient, private _authService: AuthService) {}

  getCar(): Observable<CarGet> {
    const userId = this._authService.extractUserId();
    return this.http.get<CarGet>(`${this.url}/getByCustomer/${userId}`);
  }

  saveProductCar(carProduct:CarProduct) {
    this.carProducts.push(carProduct);
    this.saveCar()
  }

  saveCar(): Observable<Response> {
    const userId = this._authService.extractUserId();

    const car: CarSave = {
      customer: userId,
      products: this.carProducts,
    };

    return this.http.post<Response>(`${this.url}/save`, car);
  }
}
