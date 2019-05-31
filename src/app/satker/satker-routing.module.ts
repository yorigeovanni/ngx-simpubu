import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SatkerComponent} from'./satker.component';

const routes: Routes = [
  {path : '', component : SatkerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SatkerRoutingModule { }
