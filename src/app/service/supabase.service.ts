import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { enviroment } from '../../enviroments/enviroment';
@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  supabaseClient!: SupabaseClient;

  constructor() {
    this.supabaseClient = createClient(
      enviroment.supabaseUrl,
      enviroment.supabaseKey
    );
  }
}
