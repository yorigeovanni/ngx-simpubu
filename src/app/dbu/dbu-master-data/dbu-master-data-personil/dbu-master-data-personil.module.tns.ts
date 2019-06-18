import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DbuMasterDataPersonilRoutingModule } from './dbu-master-data-personil-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DbuMasterDataPersonilComponent } from './dbu-master-data-personil.component';

@NgModule({
  declarations: [DbuMasterDataPersonilComponent],
  imports: [
    DbuMasterDataPersonilRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DbuMasterDataPersonilModule { }
