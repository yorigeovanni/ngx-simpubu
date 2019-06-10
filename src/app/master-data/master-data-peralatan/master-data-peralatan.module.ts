import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MasterDataPeralatanRoutingModule } from './master-data-peralatan-routing.module';
import { MasterDataPeralatanComponent } from './master-data-peralatan.component';

@NgModule({
  declarations: [MasterDataPeralatanComponent],
  imports: [
    CommonModule,
    MasterDataPeralatanRoutingModule
  ]
})
export class MasterDataPeralatanModule { }
