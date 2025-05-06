import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { SKIP_INTERCEPTOR } from './context/ignore-token-interceptor';
import { catchError, switchMap, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);
  const token = authService.accessToken;
  const router = inject(Router);


  if (req.context.get(SKIP_INTERCEPTOR)) {
    return next(req);
  }


  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // Si es 401, intentamos refresh
      if (error.status === 401 && authService.refreshToken) {
        return authService.refreshTokens().pipe(
          switchMap(() => {
            // Reintenta la petición original con el nuevo token
            const newAccessToken = authService.accessToken;
            const retryReq = req.clone({
              setHeaders: { Authorization: `Bearer ${newAccessToken}` }
            });
            return next(retryReq);
          }),
          catchError(err => {
            // Si falla el refresh, limpiamos tokens y redirigimos a login (opcional)
            authService.clearTokens();
            // Aquí podrías hacer: this.router.navigate(['/login']);
            router.navigate(['/login-page']);
            return throwError(() => err);
          })
        );
      }

      return throwError(() => error);
    })
  );
};
