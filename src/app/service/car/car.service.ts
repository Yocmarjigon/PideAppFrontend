import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import enviroment_export from 'src/app/enviroment_back';
import { CarSave } from 'src/app/models/Car/CarSave';
import { Response } from 'src/app/models/Responses/Responses';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private url = `${enviroment_export}/car`
  constructor(
    private http: HttpClient
  ) { }

  getCar(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/get`);
  }
  saveCar(car: CarSave): Observable<Response> {
    return this.http.post<Response>(`${this.url}/save`, car);
  }
}
