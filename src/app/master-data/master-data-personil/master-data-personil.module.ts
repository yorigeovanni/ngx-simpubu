import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterDataPersonilRoutingModule } from './master-data-personil-routing.module';
import { MasterDataPersonilComponent } from './master-data-personil.component';

@NgModule({
  declarations: [MasterDataPersonilComponent],
  imports: [
    CommonModule,
    MasterDataPersonilRoutingModule
  ]
})
export class MasterDataPersonilModule { }
