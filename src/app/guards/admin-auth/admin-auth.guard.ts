import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService._isLogged.asReadonly() && authService.extractRole() === 'ADMIN_USER') return true
  router.navigateByUrl('/login-page');
  return false;
};
