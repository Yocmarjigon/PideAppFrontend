import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import enviroment_export from 'src/app/enviroment_back';
import { Customer } from 'src/app/models/Customer';
import { ResponseAPI } from 'src/app/utils/ResponseAPI';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = `${enviroment_export}/customer`
  constructor(
    private http: HttpClient
  ){

  }

  public getCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.url}/get`);
  }

  public saveCustomer(customer: Customer):Observable<ResponseAPI>{
    return this.http.post<ResponseAPI>(`${this.url}/save`, customer);
  }
}
