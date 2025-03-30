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
    private readonly router: Router
  ) {}

  singIn(credentials:any){
    this.router.navigate(["/layout-admin"])
    return this._supabaseClient.auth.signInWithPassword(credentials)
  }

  sinUp(credentials: any){
    return this._supabaseClient.auth.signUp(credentials)
  }

}
