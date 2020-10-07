import { NgModule } from '@angular/core';
import {APP_ROUTING} from '../app-routing.module';

import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graphic1Component} from './graphic1/graphic1.component';
import {PagesComponent} from './pages.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphic1Component,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphic1Component,
    PagesComponent
  ],
  imports: [
    CommonModule, SharedModule, APP_ROUTING
  ]
})
export class PagesModule { }
