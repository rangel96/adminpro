import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {NopagesfoundComponent} from './pages/nopagesfound/nopagesfound.component';
import {ProgressComponent} from './pages/progress/progress.component';
import {Graphic1Component} from './pages/graphic1/graphic1.component';
import {PagesComponent} from './pages/pages.component';


const APP_ROUTES: Routes = [
  // Pages
  { path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graphic1', component: Graphic1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  // Cuando inicia redireccionar a esta página
    ] },

  // Login and Register
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // No page found
  { path: '**', component: NopagesfoundComponent },
  // { path: '**', pathMatch: 'full', redirectTo: 'nopagefound' } // Cuando no encuentra algo se redirecciona al Home
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
