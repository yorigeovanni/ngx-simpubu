import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbuRoutingModule } from './dbu-routing.module';
import { DbuComponent } from './dbu.component';

@NgModule({
  declarations: [DbuComponent],
  imports: [
    CommonModule,
    DbuRoutingModule
  ]
})
export class DbuModule { }
