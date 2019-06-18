import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DbuMasterDataRoutingModule } from './dbu-master-data-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

@NgModule({
  declarations: [],
  imports: [
    DbuMasterDataRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DbuMasterDataModule { }
