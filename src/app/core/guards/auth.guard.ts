import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../api/services/auth/auth.service';
import { SideMenuService } from '../layout/side-menu/side-menu.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const sideMenuService = inject(SideMenuService);
  if (authService.isAuthenticated()) {
    return true;
  } else {
    sideMenuService.navigateToPath('auth/user-login');
    return false;
  }
};
