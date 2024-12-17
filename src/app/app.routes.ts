import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing/landing.component';
import { ProductListPage } from './pages/products/product-list.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage,
  },
  {
    path: 'products',
    component: ProductListPage,
  },
];
