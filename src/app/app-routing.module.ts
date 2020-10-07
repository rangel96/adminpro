import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';


const APP_ROUTES: Routes = [
  { path: '**', component: NopagesfoundComponent },
  // { path: '**', pathMatch: 'full', redirectTo: 'nopagefound' } // Cuando no encuentra algo se redirecciona al Home
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES), PagesRoutingModule, AuthRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
