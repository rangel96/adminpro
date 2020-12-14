import { NgModule } from '@angular/core';
// import { APP_ROUTING } from '../app-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';

// Componentes de las paginas de pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { IncrementalComponent } from '../components/incremental/incremental.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SharedModule } from '../shared/shared.module';

// Complementos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GridComponent } from './grid/grid.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuarioComponent } from '../components/usuario/usuario.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphic1Component,
    PagesComponent,
    IncrementalComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    GridComponent,
    ProfileComponent,
    UsuarioComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphic1Component,
    PagesComponent,
    AccountSettingsComponent
  ],
    imports: [
        CommonModule, SharedModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule
    ]
})
export class PagesModule {
}
