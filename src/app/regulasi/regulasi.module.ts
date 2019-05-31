import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegulasiRoutingModule } from './regulasi-routing.module';
import { RegulasiComponent } from './regulasi.component';

@NgModule({
  declarations: [RegulasiComponent],
  imports: [
    CommonModule,
    RegulasiRoutingModule
  ]
})
export class RegulasiModule { }
