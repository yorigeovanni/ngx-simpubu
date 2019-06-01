import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KelolaAkunRoutingModule } from './kelola-akun-routing.module';
import { KelolaAkunComponent } from './kelola-akun.component';

@NgModule({
  declarations: [KelolaAkunComponent],
  imports: [
    CommonModule,
    KelolaAkunRoutingModule
  ]
})
export class KelolaAkunModule { }
