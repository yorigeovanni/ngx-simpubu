import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DbuPersonilRoutingModule } from './dbu-personil-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DbuPersonilComponent } from './dbu-personil.component';

@NgModule({
  declarations: [DbuPersonilComponent],
  imports: [
    DbuPersonilRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DbuPersonilModule { }
