import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

import { PeralatanRoutingModule } from './peralatan-routing.module';
import { PeralatanComponent } from './peralatan.component';

@NgModule({
  declarations: [PeralatanComponent],
  imports: [
    CommonModule,
    PeralatanRoutingModule,
    MDBBootstrapModulesPro,
  ]
})
export class PeralatanModule { }
