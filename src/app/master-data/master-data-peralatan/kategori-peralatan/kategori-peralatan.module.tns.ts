import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { KategoriPeralatanRoutingModule } from './kategori-peralatan-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { KategoriPeralatanComponent } from './kategori-peralatan.component';

@NgModule({
  declarations: [KategoriPeralatanComponent],
  imports: [
    KategoriPeralatanRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class KategoriPeralatanModule { }
