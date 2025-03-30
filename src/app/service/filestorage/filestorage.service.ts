import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '../supabase.service';

@Injectable({
  providedIn: 'root',
})
export class FilestorageService {
  private _supabaseClient = inject(SupabaseService).supabaseClient;
  constructor() {}

  async uploadImg(dataImg: any) {

  }
}
