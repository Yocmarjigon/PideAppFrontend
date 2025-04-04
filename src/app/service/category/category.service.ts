import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { Category } from 'src/app/models/Category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private _supabaseClient = inject(SupabaseService).supabaseClient;
  private url = 'http://localhost:8080/category';
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}/get`);
  }

  saveCategory(category: Category) {
    return this._supabaseClient
      .from('categoria')
      .insert([{ nombre: category.name }]);
  }
}
