import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'product',
    title: 'Product',
    loadComponent: () =>
      import('./features/products/products/products.page').then(
        (m) => m.ProductsPage
      ),
  },

  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  // {
  //   path: '**',
  //   loadComponent: () => import('').then((m) => m.NotFoundComponent),
  // }
];
