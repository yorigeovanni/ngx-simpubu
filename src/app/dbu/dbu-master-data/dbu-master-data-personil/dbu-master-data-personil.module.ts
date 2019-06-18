import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbuMasterDataPersonilRoutingModule } from './dbu-master-data-personil-routing.module';
import { DbuMasterDataPersonilComponent } from './dbu-master-data-personil.component';

@NgModule({
  declarations: [DbuMasterDataPersonilComponent],
  imports: [
    CommonModule,
    DbuMasterDataPersonilRoutingModule
  ]
})
export class DbuMasterDataPersonilModule { }
