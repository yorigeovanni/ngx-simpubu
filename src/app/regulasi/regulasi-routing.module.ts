import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RegulasiComponent} from './regulasi.component';

const routes: Routes = [
  {path : '', component : RegulasiComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegulasiRoutingModule { }
