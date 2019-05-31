import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MDBBootstrapModulesPro,
  ]
})

export class AuthModule { }
