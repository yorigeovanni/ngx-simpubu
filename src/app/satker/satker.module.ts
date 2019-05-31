import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SatkerRoutingModule } from './satker-routing.module';
import { SatkerComponent } from './satker.component';

@NgModule({
  declarations: [SatkerComponent],
  imports: [
    CommonModule,
    SatkerRoutingModule
  ]
})
export class SatkerModule { }
