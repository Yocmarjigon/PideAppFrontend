import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { Client } from 'src/app/models/Client';

@Injectable({
  providedIn: 'root',
})
export class RegisterusersService {
  private _supabaseClient = inject(SupabaseService).supabaseClient;
  constructor() {}

  registerClient(client: Client) {
    return this._supabaseClient.from('cliente').insert({
      nombre: client.name,
      contraseña: client.password,
      correo: client.email,
      direccion: client.address,
      telefono: client.phone,
    });
  }
}
