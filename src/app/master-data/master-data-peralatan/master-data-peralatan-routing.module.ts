import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterDataPeralatanComponent } from './master-data-peralatan.component';


const routes: Routes = [
  {path : '', component : MasterDataPeralatanComponent,
      children : [
        
      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDataPeralatanRoutingModule { }
