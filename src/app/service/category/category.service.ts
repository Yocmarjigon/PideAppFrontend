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
    this._supabaseClient.auth.getSession()
    this._supabaseClient.auth.getUser()
    return this._supabaseClient.from('categoria').select('*');
  }

  saveCategory(category: Category) {
    return this._supabaseClient
      .from('categoria')
      .insert([{ nombre: category.name }]);
  }
}
