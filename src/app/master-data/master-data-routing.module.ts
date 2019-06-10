import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterDataComponent } from './master-data.component';



const routes: Routes = [
  {path : '', component : MasterDataComponent,
      children : [
        { path: 'peralatan', loadChildren: './master-data-peralatan/master-data-peralatan.module#MasterDataPeralatanModule'},
	      { path: 'personil', loadChildren: './master-data-personil/master-data-personil.module#MasterDataPersonilModule'},
        { path: 'satker', loadChildren: './master-data-satker/master-data-satker.module#MasterDataSatkerModule'},
        { path: 'regulasi', loadChildren: './master-data-regulasi/master-data-regulasi.module#MasterDataRegulasiModule'},
        
      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class MasterDataRoutingModule { }
