import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DbuMasterDataPeralatanRoutingModule } from './dbu-master-data-peralatan-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DbuMasterDataPeralatanComponent } from './dbu-master-data-peralatan.component';

@NgModule({
  declarations: [DbuMasterDataPeralatanComponent],
  imports: [
    DbuMasterDataPeralatanRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DbuMasterDataPeralatanModule { }
