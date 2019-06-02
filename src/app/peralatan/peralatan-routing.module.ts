import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './../auth/components/login/login.component';

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
        {path : 'semua-peralatan', component : AllPeralatanComponent , canActivate: [AuthGuard]},
        {path : 'sisi-udara', component : SisiUdaraComponent , canActivate: [AuthGuard]},
        {path : 'sisi-darat', component : SisiDaratComponent, canActivate: [AuthGuard]},
        {path : 'yandar', component : YandarComponent, canActivate: [AuthGuard]},
        {path : 'kerusakan-perbaikan', component : KerusakanPerbaikanComponent, canActivate: [AuthGuard]},
        {path : 'suku-cadang', component : SukuCadangComponent, canActivate: [AuthGuard]},
        {path : 'monitoring', component : MonitoringComponent, canActivate: [AuthGuard]},
        {path : 'sertifikasi', component : SertifikasiComponent, canActivate: [AuthGuard]},
        {path : 'kalibrasi', component : KalibrasiComponent, canActivate: [AuthGuard]},
        {path : 'verifikasi', component : VerifikasiComponent, canActivate: [AuthGuard]},
        {path : 'login', component : LoginComponent,},
        { path: '**', component: NotFoundComponent }

      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class PeralatanRoutingModule { }
