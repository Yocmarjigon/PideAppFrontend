import { CanActivateFn, Router} from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { inject } from '@angular/core';



export const authGuardCustomer: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

console.log(authService._isLogged.asReadonly());
  if (authService._isLogged.asReadonly() && authService.extractRole() === 'CUSTOMER_USER') return true
  router.navigateByUrl('/login-page');
  return false
};
