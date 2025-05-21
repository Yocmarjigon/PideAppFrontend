import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import enviroment_export from 'src/app/enviroment_back';
import { SKIP_INTERCEPTOR } from 'src/app/interceptors/context/ignore-token-interceptor';
import { Customer } from 'src/app/models/Customer';
import { ResponseAPI } from 'src/app/utils/ResponseAPI';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private url = `${enviroment_export}/customer`;
  constructor(private http: HttpClient) {}

  public getCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.url}/get`);
  }

  public saveCustomer(customer: Customer): Observable<ResponseAPI> {
    console.log(customer);
    return this.http.post<ResponseAPI>(`${this.url}/save`, customer, {
      context: new HttpContext().set(SKIP_INTERCEPTOR, true),
    });
  }

  public getIdCustomer(id: string ): Observable<Customer> {
    return this.http.get<Customer>(`${this.url}/get/${id}`);
  }
}
