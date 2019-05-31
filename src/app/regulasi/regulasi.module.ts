import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

import { RegulasiRoutingModule } from './regulasi-routing.module';
import { RegulasiComponent } from './regulasi.component';

@NgModule({
  declarations: [RegulasiComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModulesPro,
    RegulasiRoutingModule
  ]
})
export class RegulasiModule { }
