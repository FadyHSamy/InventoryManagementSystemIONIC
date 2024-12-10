import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import { SideMenuService } from '../layout/side-menu/side-menu.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const sideMenuService = inject(SideMenuService);
  if (!authService.isAuthenticated()) {
    sideMenuService.navigateToPath('auth/user-login');
    return false;
  }
  return true;
};
