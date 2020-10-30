import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graphic1Component} from './graphic1/graphic1.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {PromesasComponent} from './promesas/promesas.component';
import {RxjsComponent} from './rxjs/rxjs.component';

const routes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data:{titulo:'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data:{titulo: 'Progress'} },
      { path: 'graphic1', component: Graphic1Component, data:{titulo: 'Graphic'} },
      { path: 'accountSettings', component: AccountSettingsComponent, data:{titulo: 'Ajustes de cuenta'} },
      { path: 'promesas', component: PromesasComponent, data:{titulo: 'Promesas'}},
      { path: 'rxjs', component: RxjsComponent, data:{titulo: 'RxJs'} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  // Cuando inicia redireccionar a esta página
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
