import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


import { WelcomeComponent } from './template/welcome/welcome.component';
import { NotFoundComponent } from './pages-errors/not-found/not-found.component';

const routes: Routes = [
	{ path: '', component: WelcomeComponent },
	{ path: 'peralatan', loadChildren: './peralatan/peralatan.module#PeralatanModule'},
	{ path: 'personil', loadChildren: './personil/personil.module#PersonilModule'},
	{ path: 'satker', loadChildren: './satker/satker.module#SatkerModule'},
	{ path: 'regulasi', loadChildren: './regulasi/regulasi.module#RegulasiModule'},
	{ path: 'kelolah-akun', loadChildren: './kelola-akun/kelola-akun.module#KelolaAkunModule', /*canActivate: [AuthGuard]*/},
	{ path: 'global-auth', loadChildren: './global-auth/global-auth.module#GlobalAuthModule', /*canActivate: [AuthGuard]*/},
	{ path: 'master-data', loadChildren: './master-data/master-data.module#MasterDataModule',},
  	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule],
  })



export class AppRoutingModule { }
