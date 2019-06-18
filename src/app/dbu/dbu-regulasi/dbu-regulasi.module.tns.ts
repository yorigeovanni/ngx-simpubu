import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DbuRegulasiRoutingModule } from './dbu-regulasi-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DbuRegulasiComponent } from './dbu-regulasi.component';

@NgModule({
  declarations: [DbuRegulasiComponent],
  imports: [
    DbuRegulasiRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DbuRegulasiModule { }
