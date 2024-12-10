import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from './api/services/auth/auth.service';
import { authenticationGuard } from './core/guards/authentication.guard';
import { nonAuthenticationGuard } from './core/guards/non-authentication.guard';

export function redirectBasedOnAuth() {
  const authService = inject(AuthService);
  return authService.isAuthenticated() ? 'home' : 'auth/user-login';
}
export const routes: Routes = [
  {
    path: 'product',
    loadComponent: () =>
      import('./features/products/products.page').then((m) => m.ProductsPage),
    canActivate: [authenticationGuard],
  },
  {
    path: 'auth/user-register',
    loadComponent: () =>
      import('./features/auth/user-register/user-register.page').then(
        (m) => m.UserRegisterPage
      ),
    canActivate: [nonAuthenticationGuard],
  },
  {
    path: 'auth/user-login',
    loadComponent: () =>
      import('./features/auth/login/login.page').then((m) => m.LoginPage),
    canActivate: [nonAuthenticationGuard],
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.page').then((m) => m.HomePage),
    canActivate: [authenticationGuard],
  },
  { path: '', redirectTo: () => redirectBasedOnAuth(), pathMatch: 'full' },
  {
    path: '**',
    redirectTo: () => redirectBasedOnAuth(),
    pathMatch: 'full',
  },
  // 404 Error Not Found
];
