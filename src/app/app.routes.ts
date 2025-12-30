import { Routes } from '@angular/router';
import { Login } from '../Login/login/login';
import { Dashboard } from '../Dashboard/Dashboard/dashboard';
import { authGuard } from '../Guard/auth-guard';
import { UploadedAssignment } from '../Dashboard/Reporter/uploaded-assignment/uploaded-assignment';

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
    },
    {
        path: 'uploadedAssignments',
        component: UploadedAssignment,
        canActivate: [authGuard]
    }
];
