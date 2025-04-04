import { Router, Routes } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { SignInWithIdTokenCredentials } from '@supabase/supabase-js';


interface credenciale{
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _supabaseClient = inject(SupabaseService).supabaseClient
  constructor(

  ) {}

  signIn(credentials:credenciale){
    return  this._supabaseClient.auth.signInWithPassword(credentials)
  }

  async obtenerRolUsuario(userId:string) {
    const { data, error } = await this._supabaseClient.rpc('obtener_rol_usuario', {
      p_user_id: userId
    });

    if (error) throw error;
    console.log(data)
    return data;
  }

  signOut(){
    return this._supabaseClient.auth.signOut()
  }


  signUp(credentials: any){
    return this._supabaseClient.auth.signUp(credentials)
  }

}
