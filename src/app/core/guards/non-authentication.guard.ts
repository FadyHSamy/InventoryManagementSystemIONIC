import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import { NavigationService } from 'src/app/api/services/navigation.service';

export const nonAuthenticationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const navigationService = inject(NavigationService);
  if (authService.isAuthenticated()) {
    navigationService.navigateBasedOnAuthStatus(true);
    return false;
  }
  return true;
};
