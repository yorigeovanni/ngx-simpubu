import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PeralatanComponent} from './peralatan.component'

const routes: Routes = [
  {path : '', component : PeralatanComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class PeralatanRoutingModule { }
