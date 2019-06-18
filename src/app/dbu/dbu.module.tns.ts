import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DbuRoutingModule } from './dbu-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DbuComponent } from './dbu.component';

@NgModule({
  declarations: [DbuComponent],
  imports: [
    DbuRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DbuModule { }
