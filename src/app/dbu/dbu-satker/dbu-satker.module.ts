import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbuSatkerRoutingModule } from './dbu-satker-routing.module';
import { DbuSatkerComponent } from './dbu-satker.component';

@NgModule({
  declarations: [DbuSatkerComponent],
  imports: [
    CommonModule,
    DbuSatkerRoutingModule
  ]
})
export class DbuSatkerModule { }
