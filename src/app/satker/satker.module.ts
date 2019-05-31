import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

import { SatkerRoutingModule } from './satker-routing.module';
import { SatkerComponent } from './satker.component';

@NgModule({
  declarations: [SatkerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModulesPro,
    SatkerRoutingModule
  ]
})
export class SatkerModule { }
