import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import enviroment_export from 'src/app/enviroment_back';
import { OrderSave } from 'src/app/models/Order/OrderSave';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private url = `${enviroment_export}/order`;

  constructor(private http: HttpClient) {}

  saveOrder(order: OrderSave): Observable<Response> {
    return this.http.post<Response>(`${this.url}/save`, order);
  }
}
