import { SisiDaratRoutingModule } from './sisi-darat-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { SdCreateComponent } from './sd-create/sd-create.component';
import { SdReadComponent } from './sd-read/sd-read.component';
import { SdUpdateComponent } from './sd-update/sd-update.component';
import { SdDeleteComponent } from './sd-delete/sd-delete.component';

@NgModule({
  declarations: [
            SdCreateComponent, 
            SdReadComponent, 
            SdUpdateComponent, 
            SdDeleteComponent, 
  ],

  imports: [
    CommonModule,
    SisiDaratRoutingModule,
    MDBBootstrapModulesPro,
    FormsModule
  ]
})
export class SisiDaratModule { }
