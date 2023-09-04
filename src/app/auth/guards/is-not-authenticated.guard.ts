import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces/auth-status.enum';


//Los nombres reecomendados para este tipo de Guards es PublicGuard - PrivateGuard

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if ( authService.authStatus() === AuthStatus.notAuthenticated ) {
    router.navigateByUrl('/dashboard');
    return false;
  }
  
  return true;
};
