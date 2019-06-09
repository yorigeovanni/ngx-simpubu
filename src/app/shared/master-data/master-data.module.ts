import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KategoriInstansiComponent } from './kategori-instansi/kategori-instansi.component';
import { KategoriJabatanComponent } from './kategori-jabatan/kategori-jabatan.component';
import { KategoriPeralatanComponent } from './kategori-peralatan/kategori-peralatan.component';
import { TaskMaintenancePeralatanComponent } from './task-maintenance-peralatan/task-maintenance-peralatan.component';

@NgModule({
  declarations: [KategoriInstansiComponent, KategoriJabatanComponent, KategoriPeralatanComponent, TaskMaintenancePeralatanComponent],
  imports: [
    CommonModule
  ]
})
export class MasterDataModule { }
