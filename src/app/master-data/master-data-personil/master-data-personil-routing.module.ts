import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterDataPersonilComponent } from './master-data-personil.component';


const routes: Routes = [
  {path : '', component : MasterDataPersonilComponent,
      children : [
        
      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDataPersonilRoutingModule { }
