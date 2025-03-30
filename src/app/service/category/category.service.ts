import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { Category } from 'src/app/models/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private _supabaseClient = inject(SupabaseService).supabaseClient;
  constructor() {}

  getCategories() {
    return this._supabaseClient.from('categoria').select('*');
  }
  saveCategory(category: Category) {
    return this._supabaseClient
      .from('categoria')
      .insert([{ nombre: category.name }]);
  }
}
