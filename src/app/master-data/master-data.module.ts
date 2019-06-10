import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MasterDataRoutingModule } from './master-data-routing.module';
import { MasterDataComponent } from './master-data.component';

@NgModule({
  declarations: [MasterDataComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MasterDataRoutingModule
  ]
})


export class MasterDataModule { }
