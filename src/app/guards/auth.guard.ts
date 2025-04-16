import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SupabaseService } from '../service/supabase.service';
import { AuthService } from '../service/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  // Inyectamos los servicios de manera síncrona primero
  const supabase = inject(SupabaseService);
  const authService = inject(AuthService);
  const router = inject(Router);

  // Retornamos la Promise convertida a Observable automáticamente por Angular
  return supabase.supabaseClient.auth
    .getUser()
    .then(async ({ data, error }) => {
      if (error || !data?.user) {
        console.error('Error de autenticación:', error);
        return router.navigateByUrl('/login-page'); // Redirige si no autenticado
      }



      try {

        /* switch (rol) {
          case 'CLIENTEUSER':
            router.navigateByUrl('/layout/home-page');
            break;
          case 'ADMINUSER':
            router.navigateByUrl('/layout-admin');
            break;
        } */
        // Aquí puedes agregar lógica adicional basada en el rol
        // if (rol !== 'admin') return router.createUrlTree(['/no-autorizado']);

        return true; // Permite el acceso
      } catch (err) {
        console.error('Error al obtener rol:', err);
        return router.navigateByUrl('/login-page');
      }
    });
};
