import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { YandarRoutingModule } from './yandar-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

@NgModule({
  declarations: [],
  imports: [
    YandarRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class YandarModule { }
