import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import enviroment_back from 'src/app/enviroment_back';
import { Login } from 'src/app/models/Login';

interface responseToken {
  message?: string;
  token?: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = `${enviroment_back.url_local}/auth`;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}
  signIn(credentials: Login) {
    this.http.post(`${this.url}/login`, credentials).subscribe({
      next: (r: responseToken) => {
        localStorage.setItem('token', r.token!);
        /* this.router.navigateByUrl("/layout/home-page") */
        console.log(localStorage.getItem('token'));
      },
    });
  }
}
