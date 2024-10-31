import { inject, NgModule } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  RouterModule,
  Routes,
  withDebugTracing,
  withRouterConfig,
} from '@angular/router';
import { AppComponent } from './app.component';
import { AuthService } from './core/services/auth/auth.service';
import { authGuard } from './core/guards/auth.guard';

function redirectBasedOnAuth() {
  const authService = inject(AuthService);
  return authService.isAuthenticated() ? 'auth/login' : 'auth/user-register';
}
export const routes: Routes = [
  {
    path: 'product',
    loadComponent: () =>
      import('./features/products/products.page').then((m) => m.ProductsPage),
    canActivate: [],
  },
  {
    path: 'auth/user-register',
    loadComponent: () =>
      import('./features/auth/user-register/user-register.page').then(
        (m) => m.UserRegisterPage
      ),
    canActivate: [],
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.page').then((m) => m.HomePage),
  },
  { path: '', redirectTo: (route) => redirectBasedOnAuth(), pathMatch: 'full' },
  {
    path: '**',
    redirectTo: (route) => redirectBasedOnAuth(),
    pathMatch: 'full',
  }, // 404 Error Not Found
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
