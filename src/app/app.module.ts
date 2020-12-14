// Module - Modulos a utilizar
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Component - Componentes
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { AppComponent } from './app.component';

// Routing - Rutas de los diferentes componentes
// import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTING } from './app-routing.module';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

// HttpClient para conectar a una REST API
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NopagesfoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    // AppRoutingModule,
    PagesRoutingModule,
    AuthRoutingModule,
    PagesModule,
    AuthModule,
    // RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
