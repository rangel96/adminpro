import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { GridComponent } from './grid/grid.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuarioComponent } from '../components/usuario/usuario.component';
import { SecurityGuard } from '../services/security/security.guard';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [SecurityGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
      { path: 'graphic1', component: Graphic1Component, data: { titulo: 'Graphic' } },
      { path: 'grid', component: GridComponent, data: { titulo: 'Grid' } },
      { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar' } },
      { path: 'accountSettings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de cuenta' } },
      { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
      { path: 'profile', component: ProfileComponent, data: { titulo: 'Profile' } },
      { path: 'usuario/:id', component: UsuarioComponent, data: { titulo: 'Usuario' } },
      /*{ path: '', redirectTo: '/', pathMatch: 'full' },  // Cuando inicia redireccionar a esta página*/
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
