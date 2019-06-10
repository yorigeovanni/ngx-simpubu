import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterDataSatkerRoutingModule } from './master-data-satker-routing.module';
import { MasterDataSatkerComponent } from './master-data-satker.component';

@NgModule({
  declarations: [MasterDataSatkerComponent],
  imports: [
    CommonModule,
    MasterDataSatkerRoutingModule
  ]
})
export class MasterDataSatkerModule { }
