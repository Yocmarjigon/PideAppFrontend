import { HttpInterceptorFn } from '@angular/common/http';
import { SKIP_INTERCEPTOR } from './context/ignore-token-interceptor';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');


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

  return next(req);
};
