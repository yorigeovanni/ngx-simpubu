import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './template/welcome/welcome.component';
import { NotFoundComponent } from './pages-errors/not-found/not-found.component';

const routes: Routes = [
  	{ path: '', component: WelcomeComponent },
	{ path: 'peralatan', loadChildren: './peralatan/peralatan.module#PeralatanModule', /*canActivate: [AuthGuard]*/},
	{ path: 'personil', loadChildren: './personil/personil.module#PersonilModule', /*canActivate: [AuthGuard]*/},
	{ path: 'satker', loadChildren: './satker/satker.module#SatkerModule', /*canActivate: [AuthGuard]*/},
	{ path: 'regulasi', loadChildren: './regulasi/regulasi.module#RegulasiModule', /*canActivate: [AuthGuard]*/},
  	{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
