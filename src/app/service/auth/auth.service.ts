import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import enviroment_export from 'src/app/enviroment_back';
import { Login } from 'src/app/models/Login';
import { jwtDecode} from 'jwt-decode';
import { SKIP_INTERCEPTOR } from 'src/app/interceptors/context/ignore-token-interceptor';
import { Observable, tap } from 'rxjs';
import { ResponseCredential } from 'src/app/models/Responses/ResponseCredential';
import { PayloadCustom } from 'src/app/models/PayloadCustom';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = `${enviroment_export}/auth`;
  public _isLogged = signal(false);


  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  signIn(credentials: Login):Observable<ResponseCredential>{
    return this.http.post<ResponseCredential>(`${this.url}/login`, credentials, { context:new HttpContext().set(SKIP_INTERCEPTOR, true) });
  }



  redirect(rol: string) {
    switch (rol) {
      case 'ADMIN_USER':
        this.router.navigate(['/layout-admin/product-admin-page']);
        break;
      case 'CUSTOMER_USER':
        this.router.navigateByUrl('/layout/home-page');
        break;
      default:
        this.router.navigateByUrl('/login-page');
        break;
    }
  }

  get accessToken() {
    return localStorage.getItem('accessToken');
  }

  get refreshToken() {
    return localStorage.getItem('refreshToken');
  }

  extractUserId() {
    const token = localStorage.getItem('accessToken');
    if (!token) return undefined;
    const payload: PayloadCustom = jwtDecode(token);

    return payload.userId;
  }

  setTokens(tokens: { accessToken: string; refreshToken: string }) {
    localStorage.setItem('accessToken', tokens.accessToken);
    localStorage.setItem('refreshToken', tokens.refreshToken);
  }


  clearTokens() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  refreshTokens(): Observable<any> {
    return this.http.post<any>(`${this.url}/refresh`, {
      refreshToken: this.refreshToken
    }).pipe(
      tap(response => {
        this.setTokens({
          accessToken: response.accessToken,
          refreshToken: response.refreshToken
        });
      })
    );
  }



  extractRole() {
    const token = localStorage.getItem('accessToken');
    if (!token) return undefined;
    const payload: PayloadCustom = jwtDecode(token);

    return payload.roles;
  }

  extractIdUser() {
    const token = localStorage.getItem('accessToken');
    if (!token) return undefined;
    const payload: PayloadCustom = jwtDecode(token);
    return payload.userId;
  }
}
