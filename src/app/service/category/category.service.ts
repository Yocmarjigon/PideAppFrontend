import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { Category } from 'src/app/models/Category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import enviroment_back from 'src/app/enviroment_back';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private _supabaseClient = inject(SupabaseService).supabaseClient;
  private url = `${enviroment_back.url_local}/category`
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}/get`);
  }

  saveCategory(category: Category): Observable<any>{
    return this.http.post(`${this.url}/save`, category)
  }
}
