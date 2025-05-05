import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import enviroment_export from 'src/app/enviroment_back';

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
}
