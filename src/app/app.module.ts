import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {APP_ROUTING} from './app-routing.module';
// import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeadbarComponent } from './shared/headbar/headbar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';
import { Graphic1Component } from './pages/graphic1/graphic1.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeadbarComponent,
    BreadcrumbsComponent,
    ProgressComponent,
    PagesComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NopagesfoundComponent,
    Graphic1Component
  ],
  imports: [
    BrowserModule, APP_ROUTING
    // RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
