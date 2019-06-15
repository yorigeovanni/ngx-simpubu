import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KategoriPeralatanComponent } from './kategori-peralatan.component';

const routes: Routes = [
  {path : '', component : KategoriPeralatanComponent,
      children : [
        {path : 'sisi-udara', loadChildren: './sisi-udara/sisi-udara.module#SisiUdaraModule'},
        {path : 'sisi-darat', loadChildren: './sisi-darat/sisi-darat.module#SisiDaratModule'},
        {path : 'yandar', loadChildren: './yandar/yandar.module#YandarModule'},
        
      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KategoriPeralatanRoutingModule { }
