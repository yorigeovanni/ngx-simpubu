import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthService } from './services/auth.service';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { LoginComponent } from './components/login/login.component';

import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store/auth.reducer';

//import { EffectsModule } from '@ngrx/effects';
//import { AuthEffects } from './store/auth.effects';




@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MDBBootstrapModulesPro,
    StoreModule.forFeature('auth', fromAuth.authReducer),
   // EffectsModule.forFeature([AuthEffects]),
  ],

  declarations: [ LoginComponent, ],
  exports: [ LoginComponent, ],
  providers: [AuthService]
})



export class AuthModule { }
