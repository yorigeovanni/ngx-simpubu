import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PersonilComponent} from './personil.component';

const routes: Routes = [
  {path : '', component : PersonilComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonilRoutingModule { }
