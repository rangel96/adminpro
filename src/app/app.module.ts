import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {RouterModule} from '@angular/router';

import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { AppComponent } from './app.component';

import {APP_ROUTING} from './app-routing.module';
import {PagesModule} from './pages/pages.module';
import {AuthModule} from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    NopagesfoundComponent,
  ],
  imports: [
    BrowserModule, APP_ROUTING, PagesModule, AuthModule,
    // RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
