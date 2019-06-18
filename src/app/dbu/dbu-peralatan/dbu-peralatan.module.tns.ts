import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DbuPeralatanRoutingModule } from './dbu-peralatan-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DbuPeralatanComponent } from './dbu-peralatan.component';

@NgModule({
  declarations: [DbuPeralatanComponent],
  imports: [
    DbuPeralatanRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DbuPeralatanModule { }
