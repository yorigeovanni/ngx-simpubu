import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KategoriPeralatanRoutingModule } from './kategori-peralatan-routing.module';
import { KategoriPeralatanComponent } from './kategori-peralatan.component';

@NgModule({
  declarations: [KategoriPeralatanComponent],
  imports: [
    CommonModule,
    KategoriPeralatanRoutingModule
  ]
})
export class KategoriPeralatanModule { }
