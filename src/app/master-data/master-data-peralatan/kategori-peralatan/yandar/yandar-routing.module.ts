import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YandarReadComponent } from './yandar-read/yandar-read.component';
import { YandarCreateComponent } from './yandar-create/yandar-create.component';
import { YandarUpdateComponent } from './yandar-update/yandar-update.component';


const routes: Routes = [
  {path : '', component : YandarReadComponent},
  {path : 'list-data', component : YandarReadComponent},
  {path : 'baru', component : YandarCreateComponent},
  {path : 'update', component : YandarUpdateComponent},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YandarRoutingModule { }
