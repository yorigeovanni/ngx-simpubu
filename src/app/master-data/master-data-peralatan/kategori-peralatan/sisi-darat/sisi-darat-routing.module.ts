import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SdReadComponent } from './sd-read/sd-read.component';
import { SdCreateComponent } from './sd-create/sd-create.component';
import { SdUpdateComponent } from './sd-update/sd-update.component';


const routes: Routes = [
  {path : '', component : SdReadComponent},
  {path : 'list-data', component : SdReadComponent},
  {path : 'baru', component : SdCreateComponent},
  {path : 'update', component : SdUpdateComponent},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SisiDaratRoutingModule { }
