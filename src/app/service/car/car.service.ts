import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import enviroment_export from 'src/app/enviroment_back';
import { CarProduct } from 'src/app/models/Car/CarProduct';
import { CarSave } from 'src/app/models/Car/CarSave';
import { Response } from 'src/app/models/Responses/Responses';
import { AuthService } from '../auth/auth.service';
import { CarGet } from 'src/app/models/Car/CarGet';
import { CarGetProduct } from 'src/app/models/Car/CarGetProduct';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private url = `${enviroment_export}/car`;
  private carProducts: CarProduct[] = [];
  private idUser = '';
  public loadingSaveCar = signal(false);
  constructor(
    private http: HttpClient,
    private _authService: AuthService
  ) {}

  getCar(): Observable<CarGet> {
    const userId = this._authService.extractUserId();
    return this.http.get<CarGet>(`${this.url}/getByCustomer/${userId}`);
  }

saveCarProduct(carProduct: CarProduct) {
  this.loadingSaveCar.set(false);

  this.getCar().subscribe({
    next: res => {
      const existingProducts = res.products ?? [];

      // Evitar duplicados: buscar si ya existe
      const index = existingProducts.findIndex(p => p.idProduct === carProduct.idProduct);
      if (index !== -1) {
        // Ya existe: actualizar la cantidad
        existingProducts[index].amount = carProduct.amount ?? 1;
      } else {
        // No existe: agregar nuevo
        existingProducts.push(carProduct as CarGetProduct);
      }

      const userId = this._authService.extractUserId();
      const car: CarSave = {
        customer: userId,
        products: existingProducts,
      };

      this.saveCar(car).subscribe({
        next: res => {
          console.log(res);
          this.loadingSaveCar.set(true);
        },
        error: err => {
          console.log(err);
          this.loadingSaveCar.set(false);
        }
      });
    },

    error: err => {
      console.log(err);

      if (err.status === 404) {
        // Crear nuevo carrito desde cero
        const userId = this._authService.extractUserId();
        const car: CarSave = {
          customer: userId,
          products: [carProduct],
        };

        console.log(car);


        this.saveCar(car).subscribe({
          next: res => {
            console.log(res);
            this.loadingSaveCar.set(true);
          },
          error: err => {
            console.log(err);
            this.loadingSaveCar.set(false);
          }
        });
      } else {
        // Otro error distinto a 404
        this.loadingSaveCar.set(false);
      }
    }
  });
}

  public saveCar(car: CarSave) {
    return this.http.post<Response>(`${this.url}/save`, car);
  }

  removeCarProduct(idProductToRemove: string) {
    this.loadingSaveCar.set(false);

    this.getCar().subscribe({
      next: res => {
        const updatedProducts = (res.products ?? []).filter(
          p => p.idProduct !== idProductToRemove
        );

        const userId = this._authService.extractUserId();
        const car: CarSave = {
          customer: userId,
          products: updatedProducts,
        };

        this.saveCar(car).subscribe({
          next: res => {
            console.log(res);
            this.loadingSaveCar.set(true);
          },
          error: err => {
            console.log(err);
            this.loadingSaveCar.set(false);
          }
        });
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        this.loadingSaveCar.set(true);
      },
    });
  }
}
