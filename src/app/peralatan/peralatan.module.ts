import { PeralatanRoutingModule } from './peralatan-routing.module';
import { PeralatanComponent } from './peralatan.component';
import { AuthModule } from './../auth/auth.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';


import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AllPeralatanComponent } from './all-peralatan/all-peralatan.component';
import { SisiUdaraComponent } from './sisi-udara/sisi-udara.component';
import { SisiDaratComponent } from './sisi-darat/sisi-darat.component';
import { YandarComponent } from './yandar/yandar.component';
import { KerusakanPerbaikanComponent } from './kerusakan-perbaikan/kerusakan-perbaikan.component';
import { SukuCadangComponent } from './suku-cadang/suku-cadang.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { SertifikasiComponent } from './sertifikasi/sertifikasi.component';
import { KalibrasiComponent } from './kalibrasi/kalibrasi.component';
import { VerifikasiComponent } from './verifikasi/verifikasi.component';



@NgModule({
  declarations: [PeralatanComponent, 
                  NotFoundComponent, 
                  WelcomeComponent, 
                  AllPeralatanComponent, 
                  SisiUdaraComponent, 
                  SisiDaratComponent, 
                  YandarComponent, 
                  KerusakanPerbaikanComponent, 
                  SukuCadangComponent, 
                  MonitoringComponent, 
                  SertifikasiComponent, 
                  KalibrasiComponent, 
                  VerifikasiComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    PeralatanRoutingModule,
    MDBBootstrapModulesPro,
  ]
})
export class PeralatanModule { }
