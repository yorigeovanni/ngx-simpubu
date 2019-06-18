import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbuRegulasiRoutingModule } from './dbu-regulasi-routing.module';
import { DbuRegulasiComponent } from './dbu-regulasi.component';

@NgModule({
  declarations: [DbuRegulasiComponent],
  imports: [
    CommonModule,
    DbuRegulasiRoutingModule
  ]
})
export class DbuRegulasiModule { }
