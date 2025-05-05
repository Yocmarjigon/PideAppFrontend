import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import enviroment_export from 'src/app/enviroment_back';
import { Login } from 'src/app/models/Login';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { SKIP_INTERCEPTOR } from 'src/app/interceptors/context/ignore-token-interceptor';
import { Observable } from 'rxjs';
import { ResponseCredential } from 'src/app/models/ResponseCredential';

interface payloadCustom extends JwtPayload {
  roles?: string;
}
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



  extractRole() {
    const token = localStorage.getItem('token');
    if (!token) return undefined;
    const payload: payloadCustom = jwtDecode(token);

    return payload.roles;
  }
}
