import { Router, Routes } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { SignInWithIdTokenCredentials } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _supabaseClient = inject(SupabaseService).supabaseClient
  constructor(

  ) {}

  singIn(credentials:any){
    console.log(this._supabaseClient.auth.getUser())
    return this._supabaseClient.auth.signInWithPassword(credentials)
  }

  sinUp(credentials: any){
    return this._supabaseClient.auth.signUp(credentials)
  }

}
