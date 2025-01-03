import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing/landing.component';
import { ProductListPage } from './pages/products/product-list.component';
import { ProductDetailPage } from './pages/products/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage,
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductListPage,
      },
      {
        path: ':id',
        component: ProductDetailPage,
      },
    ],
  },
];
