import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: 'index',
    loadComponent: () => import('./page/index/index.page').then((m) => m.IndexPage),
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'venue',
    loadComponent: () => import('./page/venue/venue.page').then((m) => m.VenuePage),
  },
  {
    path: 'venue/:slug',
    loadComponent: () =>
      import('./page/venue-detail/venue-detail.page').then((m) => m.VenueDetailPage),
  },
  {
    path: 'checkout',
    loadComponent: () => import('./page/checkout/checkout.page').then((m) => m.CheckoutPage),
  },
  {
    path: 'order-summary',
    loadComponent: () =>
      import('./page/order-summary/order-summary.page').then((m) => m.OrderSummaryPage),
  },
];
