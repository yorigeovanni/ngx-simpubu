import { SisiUdaraRoutingModule } from './sisi-udara-routing.module';
import { SisiUdaraComponent } from './sisi-udara.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';



import { SuCreateComponent } from './su-create/su-create.component';
import { SuReadComponent } from './su-read/su-read.component';
import { SuUpdateComponent } from './su-update/su-update.component';
import { SuDeleteComponent } from './su-delete/su-delete.component';





@NgModule({
  declarations: [
            SuCreateComponent, 
            SuReadComponent, 
            SuUpdateComponent, 
            SuDeleteComponent, 
            SisiUdaraComponent, 
          ],
          
  imports: [
    CommonModule,
    SisiUdaraRoutingModule,
    MDBBootstrapModulesPro,
    FormsModule,

  ]
})


export class SisiUdaraModule { }
