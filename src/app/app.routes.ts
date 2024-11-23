import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from './core/services/auth/auth.service';
import { authGuard } from './core/guards/auth.guard';

export function redirectBasedOnAuth() {
  const authService = inject(AuthService);
  return authService.isAuthenticated() ? 'home' : 'auth/user-login';
}
export const routes: Routes = [
  {
    path: 'product',
    loadComponent: () =>
      import('./features/products/products.page').then((m) => m.ProductsPage),
    canActivate: [authGuard],
  },
  {
    path: 'auth/user-register',
    loadComponent: () =>
      import('./features/auth/user-register/user-register.page').then(
        (m) => m.UserRegisterPage
      ),
  },
  {
    path: 'auth/user-login',
    loadComponent: () =>
      import('./features/auth/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.page').then((m) => m.HomePage),
    canActivate: [authGuard],
  },
  { path: '', redirectTo: (route) => redirectBasedOnAuth(), pathMatch: 'full' },
  {
    path: '**',
    redirectTo: (route) => redirectBasedOnAuth(),
    pathMatch: 'full',
  },
  // 404 Error Not Found
];
