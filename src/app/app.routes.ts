import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RequestsComponent } from './components/requests/requests.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' }, // { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'requests', component: RequestsComponent },
    { path: '**', redirectTo: 'login' }
];
