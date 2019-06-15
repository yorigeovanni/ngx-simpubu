import { MasterDataPeralatanRoutingModule } from './master-data-peralatan-routing.module';
import { MasterDataPeralatanComponent } from './master-data-peralatan.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


// KATEGORI PERALATAN RESOURCES
import { KategoriPeralatanComponent } from './kategori-peralatan/kategori-peralatan.component';
import * as kategori_peralatan_reducer  from './kategori-peralatan/store/kategori-peralatan.reducer';




import { TupoksiPeralatanComponent } from './tupoksi-peralatan/tupoksi-peralatan.component';
import { LisensiPeralatanComponent } from './lisensi-peralatan/lisensi-peralatan.component';
import { ChecklistSertifikasiPeralatanComponent } from './checklist-sertifikasi-peralatan/checklist-sertifikasi-peralatan.component';
import { ChecklistVerifikasiPeralatanComponent } from './checklist-verifikasi-peralatan/checklist-verifikasi-peralatan.component';
import { KalibrasiPeralatanComponent } from './kalibrasi-peralatan/kalibrasi-peralatan.component';

@NgModule({
  declarations: [ 
      MasterDataPeralatanComponent, 
      KategoriPeralatanComponent, 
      TupoksiPeralatanComponent, 
      LisensiPeralatanComponent, 
      ChecklistSertifikasiPeralatanComponent, 
      ChecklistVerifikasiPeralatanComponent, 
      KalibrasiPeralatanComponent,
    ],

  imports: [
      CommonModule,
      MasterDataPeralatanRoutingModule,
      MDBBootstrapModulesPro,
      FormsModule,

      StoreModule.forFeature('kategori_peralatan', kategori_peralatan_reducer.KategoriPeralatanReducer),
      
    //  EffectsModule.forFeature([])
  ]
})

export class MasterDataPeralatanModule { }
