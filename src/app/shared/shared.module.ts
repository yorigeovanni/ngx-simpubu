import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as sisiUdaraReducer from './peralatan/sisi-udara/store/ngrx-sisi-udara.reducer'



// ======================================== SISI UDARA

import { CreateComponent } from './peralatan/sisi-udara/crud/create/create.component';
import { ReadComponent } from './peralatan/sisi-udara/crud/read/read.component';
import { UpdateComponent } from './peralatan/sisi-udara/crud/update/update.component';
import { DeleteComponent } from './peralatan/sisi-udara/crud/delete/delete.component';
import { PrintComponent } from './peralatan/sisi-udara/print/print.component';


// ======================================== SISI DARAT
import { SharedPeralatanSisiDaratCreateComponent } from './peralatan/sisi-darat/crud/create/create.component';
import { SharedPeralatanSisiDaratReadComponent } from './peralatan/sisi-darat/crud/read/read.component';
import { SharedPeralatanSisiDaratUpdateComponent } from './peralatan/sisi-darat/crud/update/update.component';
import { SharedPeralatanSisiDaratDeleteComponent } from './peralatan/sisi-darat/crud/delete/delete.component';
import { SharedPeralatanSisiDaratPrintComponent } from './peralatan/sisi-darat/print/print.component';



// ======================================== YANDAR | PKP-PK
import { SharedPeralatanYandarCreateComponent } from './peralatan/yandar/crud/create/create.component';
import { SharedPeralatanYandarReadComponent } from './peralatan/yandar/crud/read/read.component';
import { SharedPeralatanYandarUpdateComponent } from './peralatan/yandar/crud/update/update.component';
import { SharedPeralatanYandarDeleteComponent } from './peralatan/yandar/crud/delete/delete.component';
import { SharedPeralatanYandarPrintComponent } from './peralatan/yandar/print/print.component';


import { UmumComponent } from './peralatan/all-peralatan/umum/umum.component';
import { SertifikatComponent } from './peralatan/all-peralatan/sertifikat/sertifikat.component';
import { DokumentComponent } from './peralatan/all-peralatan/dokument/dokument.component';
import { KalibrasiComponent } from './peralatan/all-peralatan/kalibrasi/kalibrasi.component';
import { VerifikasiComponent } from './peralatan/all-peralatan/verifikasi/verifikasi.component';



@NgModule({
  declarations: [
     CreateComponent,
     ReadComponent, 
     UpdateComponent, 
     DeleteComponent,
     PrintComponent,

     SharedPeralatanSisiDaratCreateComponent,
     SharedPeralatanSisiDaratReadComponent,
     SharedPeralatanSisiDaratUpdateComponent,
     SharedPeralatanSisiDaratDeleteComponent,
     SharedPeralatanSisiDaratPrintComponent,

     SharedPeralatanYandarCreateComponent,
     SharedPeralatanYandarReadComponent,
     SharedPeralatanYandarUpdateComponent,
     SharedPeralatanYandarDeleteComponent,
     SharedPeralatanYandarPrintComponent,

     
     UmumComponent,
     SertifikatComponent,
     DokumentComponent,
     KalibrasiComponent,
     VerifikasiComponent,






  ],

  imports: [
              CommonModule,
              FormsModule,
              HttpClientModule,
              StoreModule.forFeature('peralatansisiUdara', sisiUdaraReducer.Reducer),
              
           ],
  
  exports : [
     CreateComponent,
     ReadComponent, 
     UpdateComponent, 
     DeleteComponent,
     PrintComponent,

     SharedPeralatanSisiDaratCreateComponent,
     SharedPeralatanSisiDaratReadComponent,
     SharedPeralatanSisiDaratUpdateComponent,
     SharedPeralatanSisiDaratDeleteComponent,
     SharedPeralatanSisiDaratPrintComponent,

     SharedPeralatanYandarCreateComponent,
     SharedPeralatanYandarReadComponent,
     SharedPeralatanYandarUpdateComponent,
     SharedPeralatanYandarDeleteComponent,
     SharedPeralatanYandarPrintComponent,
  ],
})


export class SharedModule { }
