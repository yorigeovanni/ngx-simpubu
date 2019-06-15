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

      // -- A. SISI UDARA - KATEGORI PERALATAN RESOURCES
              import { SuCreateComponent } from './kategori-peralatan/sisi-udara/su-create/su-create.component';
              import { SuReadComponent } from './kategori-peralatan/sisi-udara/su-read/su-read.component';
              import { SuUpdateComponent } from './kategori-peralatan/sisi-udara/su-update/su-update.component';
              import { SuDeleteComponent } from './kategori-peralatan/sisi-udara/su-delete/su-delete.component';

      // -- B. SISI DARAT - KATEGORI PERALATAN RESOURCES
              import { SdCreateComponent } from './kategori-peralatan/sisi-darat/sd-create/sd-create.component';
              import { SdReadComponent } from './kategori-peralatan/sisi-darat/sd-read/sd-read.component';
              import { SdUpdateComponent } from './kategori-peralatan/sisi-darat/sd-update/sd-update.component';
              import { SdDeleteComponent } from './kategori-peralatan/sisi-darat/sd-delete/sd-delete.component';

      // -- B. PKP-PK - KATEGORI PERALATAN RESOURCES
              import { YandarCreateComponent } from './kategori-peralatan/yandar/yandar-create/yandar-create.component';
              import { YandarReadComponent } from './kategori-peralatan/yandar/yandar-read/yandar-read.component';
              import { YandarUpdateComponent } from './kategori-peralatan/yandar/yandar-update/yandar-update.component';
              import { YandarDeleteComponent } from './kategori-peralatan/yandar/yandar-delete/yandar-delete.component';





import { TupoksiPeralatanComponent } from './tupoksi-peralatan/tupoksi-peralatan.component';
import { LisensiPeralatanComponent } from './lisensi-peralatan/lisensi-peralatan.component';
import { ChecklistSertifikasiPeralatanComponent } from './checklist-sertifikasi-peralatan/checklist-sertifikasi-peralatan.component';
import { ChecklistVerifikasiPeralatanComponent } from './checklist-verifikasi-peralatan/checklist-verifikasi-peralatan.component';
import { KalibrasiPeralatanComponent } from './kalibrasi-peralatan/kalibrasi-peralatan.component';





@NgModule({
  declarations: [ 
      MasterDataPeralatanComponent, 
      //==============================================
      KategoriPeralatanComponent, 
       // - kategori sisi udara
      SuCreateComponent, 
      SuReadComponent, 
      SuUpdateComponent, 
      SuDeleteComponent, 
      // - kategori sisi darat
      SdCreateComponent, 
      SdReadComponent, 
      SdUpdateComponent, 
      SdDeleteComponent, 
      // -PKP-PK
      YandarCreateComponent, 
      YandarReadComponent, 
      YandarUpdateComponent, 
      YandarDeleteComponent, 
      //==============================================

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
