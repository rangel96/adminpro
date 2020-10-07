import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {NopagesfoundComponent} from './pages/nopagesfound/nopagesfound.component';
import {ProgressComponent} from './pages/progress/progress.component';


const APP_ROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'nopagefound', component: NopagesfoundComponent },
  { path: 'progress', component: ProgressComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: 'nopagefound' } // Cuando no encuentra algo se redirecciona al Home
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(Router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
