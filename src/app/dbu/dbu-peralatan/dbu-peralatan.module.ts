import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbuPeralatanRoutingModule } from './dbu-peralatan-routing.module';
import { DbuPeralatanComponent } from './dbu-peralatan.component';

@NgModule({
  declarations: [DbuPeralatanComponent],
  imports: [
    CommonModule,
    DbuPeralatanRoutingModule
  ]
})
export class DbuPeralatanModule { }
