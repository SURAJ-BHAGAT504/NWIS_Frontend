import { Routes } from '@angular/router';
import { Login } from '../Login/login/login';
import { Dashboard } from '../Dashboard/dashboard/dashboard';
import { authGuard } from '../Guard/auth-guard';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [authGuard]
    }
];
