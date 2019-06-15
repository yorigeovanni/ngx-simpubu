import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuReadComponent } from './su-read/su-read.component';
import { SuCreateComponent } from './su-create/su-create.component';
import { SuUpdateComponent } from './su-update/su-update.component';



const routes: Routes = [
  {path : '', component : SuReadComponent},
  {path : 'list-data', component : SuReadComponent},
  {path : 'baru', component : SuCreateComponent},
  {path : 'update', component : SuUpdateComponent},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SisiUdaraRoutingModule { }
