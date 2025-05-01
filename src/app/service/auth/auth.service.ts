import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import enviroment_back from 'src/app/enviroment_back';
import { Login } from 'src/app/models/Login';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { SKIP_INTERCEPTOR } from 'src/app/interceptors/context/ignore-token-interceptor';
interface responseToken {
  message?: string;
  token?: string;
}
interface payloadCustom extends JwtPayload {
  roles?: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = `${enviroment_back.url_local}/auth`;
  public _isLogged = signal(false);


  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  signIn(credentials: Login) {
    this.http.post(`${this.url}/login`, credentials, { context:new HttpContext().set(SKIP_INTERCEPTOR, true) }).subscribe({
      next: (r: responseToken) => {
        console.log(r)
        if (!r.token) return;

        localStorage.setItem('token', r.token!);
      },
      error: e => {
        console.log(e);

      },
      complete: () => {
        const rol = this.extractRole()
        this._isLogged.set(true);
        console.log(this._isLogged());

        this.redirect(rol!)

      },
    });
  }
  redirect(rol: string) {
    switch (rol) {
      case 'ADMIN_USER':
        this.router.navigateByUrl('/layout-admin/product-page');
        break;
      case 'CUSTOMER_USER':
        this.router.navigateByUrl('/layout/home-page');
        break;
      default:
        this.router.navigateByUrl('/login-page');
        break;
    }
  }



  extractRole() {
    const token = localStorage.getItem('token');
    if (!token) return undefined;
    const payload: payloadCustom = jwtDecode(token);

    return payload.roles;
  }
}
