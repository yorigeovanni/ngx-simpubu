import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbuPersonilRoutingModule } from './dbu-personil-routing.module';
import { DbuPersonilComponent } from './dbu-personil.component';

@NgModule({
  declarations: [DbuPersonilComponent],
  imports: [
    CommonModule,
    DbuPersonilRoutingModule
  ]
})
export class DbuPersonilModule { }
