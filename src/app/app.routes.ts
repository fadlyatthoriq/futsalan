import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: 'index',
    loadComponent: () => import('./index/index.page').then((m) => m.IndexPage),
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'venue',
    loadComponent: () => import('./venue/venue.page').then( m => m.VenuePage)
  },
  {
    path: 'venue/:slug',
    loadComponent: () => import('./venue-detail/venue-detail.page').then(m => m.VenueDetailPage)
  },
];
