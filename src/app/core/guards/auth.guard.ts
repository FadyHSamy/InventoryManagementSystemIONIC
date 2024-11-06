import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { SideMenuService } from '../layout/side-menu/side-menu.service';
import { redirectBasedOnAuth } from 'src/app/app.routes';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const sideMenuService = inject(SideMenuService);
  if (authService.isAuthenticated()) {
    return true;
  } else {
    sideMenuService.navigateToPath('auth/user-register');
    return false;
  }
};
