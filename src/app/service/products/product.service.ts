import { inject, Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { enviroment } from '../../../enviroments/enviroment';
import { SupabaseService } from '../supabase.service';
import { Product } from 'src/app/models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _supabaseClient = inject(SupabaseService).supabaseClient;
  private url = "http://localhost:8080/product"

  constructor(
    private http: HttpClient
  ) {}

  test():Observable<string>{
    return this.http.get<string>(`${this.url}/test`)
  }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}/get`);
  }

  saveProducts(product: Product):Observable<any>{
    return this.http.post(`${this.url}/product/save`, product);
  }
}
