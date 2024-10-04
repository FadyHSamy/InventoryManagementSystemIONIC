import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'product',
    title: 'Product',
    loadComponent: () =>
      import('./features/products/products.page').then((m) => m.ProductsPage),
  },
  {
    path: 'auth/user-register',
    loadComponent: () =>
      import('./features/auth/user-register/user-register.page').then(
        (m) => m.UserRegisterPage
      ),
  },
];

