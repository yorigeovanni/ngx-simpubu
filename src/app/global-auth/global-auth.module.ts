import { GlobalAuthRoutingModule } from './global-auth-routing.module';
import { AuthModule } from './../auth/auth.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    GlobalAuthRoutingModule,
    AuthModule,
  ]
})

export class GlobalAuthModule { }
