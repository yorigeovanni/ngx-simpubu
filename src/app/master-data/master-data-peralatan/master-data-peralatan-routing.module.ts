import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterDataPeralatanComponent } from './master-data-peralatan.component';

import { KategoriPeralatanComponent } from './kategori-peralatan/kategori-peralatan.component';
import { TupoksiPeralatanComponent } from './tupoksi-peralatan/tupoksi-peralatan.component';
import { LisensiPeralatanComponent } from './lisensi-peralatan/lisensi-peralatan.component';
import { ChecklistSertifikasiPeralatanComponent } from './checklist-sertifikasi-peralatan/checklist-sertifikasi-peralatan.component';
import { ChecklistVerifikasiPeralatanComponent } from './checklist-verifikasi-peralatan/checklist-verifikasi-peralatan.component';
import { KalibrasiPeralatanComponent } from './kalibrasi-peralatan/kalibrasi-peralatan.component';

const routes: Routes = [
  {path : '', component : MasterDataPeralatanComponent,
      children : [
        {path : 'kategori-peralatan', component : KategoriPeralatanComponent},
        {path : 'tupoksi-perawatan-peralatan', component : TupoksiPeralatanComponent},
        {path : 'lisensi-peralatan', component : LisensiPeralatanComponent},
        {path : 'checklist-sertifikasi', component : ChecklistSertifikasiPeralatanComponent},
        {path : 'checklist-verifikasi', component : ChecklistVerifikasiPeralatanComponent},
        {path : 'kebutuhan-kalibrasi', component : KalibrasiPeralatanComponent},
      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDataPeralatanRoutingModule { }
