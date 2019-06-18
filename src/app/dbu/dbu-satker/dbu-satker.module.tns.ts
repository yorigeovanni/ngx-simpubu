import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DbuSatkerRoutingModule } from './dbu-satker-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DbuSatkerComponent } from './dbu-satker.component';

@NgModule({
  declarations: [DbuSatkerComponent],
  imports: [
    DbuSatkerRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DbuSatkerModule { }
