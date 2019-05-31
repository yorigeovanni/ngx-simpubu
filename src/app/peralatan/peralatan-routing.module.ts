import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {PeralatanComponent} from './peralatan.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {NotFoundComponent} from './not-found/not-found.component';

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

const routes: Routes = [
  {path : '', component : PeralatanComponent,
      children : [
      	{path : '', component : WelcomeComponent},
        {path : 'semua-peralatan', component : AllPeralatanComponent},
        {path : 'sisi-udara', component : SisiUdaraComponent},
        {path : 'sisi-darat', component : SisiDaratComponent},
        {path : 'yandar', component : YandarComponent},
        {path : 'kerusakan-perbaikan', component : KerusakanPerbaikanComponent},
        {path : 'suku-cadang', component : SukuCadangComponent},
        {path : 'monitoring', component : MonitoringComponent},
        {path : 'sertifikasi', component : SertifikasiComponent},
        {path : 'kalibrasi', component : KalibrasiComponent},
        {path : 'verifikasi', component : VerifikasiComponent},
        { path: '**', component: NotFoundComponent }

      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class PeralatanRoutingModule { }
