import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterDataRegulasiRoutingModule } from './master-data-regulasi-routing.module';
import { MasterDataRegulasiComponent } from './master-data-regulasi.component';

@NgModule({
  declarations: [MasterDataRegulasiComponent],
  imports: [
    CommonModule,
    MasterDataRegulasiRoutingModule
  ]
})
export class MasterDataRegulasiModule { }
