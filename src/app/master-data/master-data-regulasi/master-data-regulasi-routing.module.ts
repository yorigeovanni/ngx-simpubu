import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterDataRegulasiComponent } from './master-data-regulasi.component';


const routes: Routes = [
  {path : '', component : MasterDataRegulasiComponent,
      children : [
        
      ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDataRegulasiRoutingModule { }
