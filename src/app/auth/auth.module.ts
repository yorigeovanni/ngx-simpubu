import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { RessetPasswordComponent } from './component/resset-password/resset-password.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, RessetPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MDBBootstrapModulesPro,
  ]
})

export class AuthModule { }
