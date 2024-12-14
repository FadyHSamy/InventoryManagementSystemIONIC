import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from './api/services/auth/auth.service';
import { authenticationGuard } from './core/guards/authentication.guard';
import { nonAuthenticationGuard } from './core/guards/non-authentication.guard';
import { NavigationService } from './api/services/navigation.service';

export function redirectBasedOnAuth() {
  const authService = inject(AuthService);
  const navigationService = inject(NavigationService);
  return authService.isAuthenticated()
    ? navigationService.DEFAULT_AUTHENTICATED_ROUTE
    : navigationService.LOGIN_ROUTE;
}
export const routes: Routes = [
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
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.page').then(
        (m) => m.DashboardPage
      ),
    canActivate: [authenticationGuard],
  },
  {
    path: 'inventory',
    loadComponent: () =>
      import('./features/inventory/inventory.page').then(
        (m) => m.InventoryPage
      ),
    canActivate: [authenticationGuard],
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./features/orders/orders.page').then((m) => m.OrdersPage),
    canActivate: [authenticationGuard],
  },
  {
    path: 'suppliers',
    loadComponent: () =>
      import('./features/suppliers/suppliers.page').then(
        (m) => m.SuppliersPage
      ),
    canActivate: [authenticationGuard],
  },
  { path: '', redirectTo: () => redirectBasedOnAuth(), pathMatch: 'full' },
  {
    path: '**',
    redirectTo: () => redirectBasedOnAuth(),
    pathMatch: 'full',
  },
];
