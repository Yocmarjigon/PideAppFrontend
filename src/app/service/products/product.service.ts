import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { Product } from 'src/app/models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import enviroment_back from 'src/app/enviroment_back';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _supabaseClient = inject(SupabaseService).supabaseClient;
  private url = `${enviroment_back.url_local}/product`;
  constructor(private http: HttpClient) {}

  test(): Observable<string> {
    return this.http.get<string>(`${this.url}/test`);
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/get`);
  }

  saveProducts(product: Product): Observable<any> {
    return this.http.post(`${this.url}/save`, product);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.url}/get/${id}`);
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/update/${id}`, product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.url}/delete/${id}`);
  }
}
