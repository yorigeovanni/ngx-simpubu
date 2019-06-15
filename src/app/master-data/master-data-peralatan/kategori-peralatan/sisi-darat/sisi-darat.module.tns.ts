import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SisiDaratRoutingModule } from './sisi-darat-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

@NgModule({
  declarations: [],
  imports: [
    SisiDaratRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SisiDaratModule { }
