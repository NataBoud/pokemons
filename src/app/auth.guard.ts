
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
  
export const AuthGuard:CanActivateFn=(
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
  ):boolean => {

  const authService = inject(AuthService);

  const router = inject(Router);

  if(authService.isLoggedIn){
    return true;
  }
  router.navigate(['/login']);
  return false;
}
  



