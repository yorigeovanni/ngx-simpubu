import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbuMasterDataPeralatanRoutingModule } from './dbu-master-data-peralatan-routing.module';
import { DbuMasterDataPeralatanComponent } from './dbu-master-data-peralatan.component';

@NgModule({
  declarations: [DbuMasterDataPeralatanComponent],
  imports: [
    CommonModule,
    DbuMasterDataPeralatanRoutingModule
  ]
})
export class DbuMasterDataPeralatanModule { }
