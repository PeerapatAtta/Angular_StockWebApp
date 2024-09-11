import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login' },
    },    
    {
        path: 'register',
        component: RegisterComponent,
        data: { title: 'Register' },
    },{
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Dashboard' },
    },
];
