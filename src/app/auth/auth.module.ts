import { NgModule } from '@angular/core';
import {APP_ROUTING} from '../app-routing.module';

import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule, APP_ROUTING
  ]
})
export class AuthModule { }
