import { inject, Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { enviroment } from '../../../enviroments/enviroment';
import { SupabaseService } from '../supabase.service';
import { Product } from 'src/app/models/Product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _supabaseClient = inject(SupabaseService).supabaseClient;

  constructor() {}

  getProducts() {
    return this._supabaseClient.from('producto').select('*');
  }
  saveProducts(product: Product) {
    return this._supabaseClient
      .from('producto')
      .insert([
        {
          titulo: product.title,
          precio: product.price,
          descripcion: product.description,
          stock: product.stock,
          categoria: product.category,
          img: product.img
        },
      ]).select();
  }
}
