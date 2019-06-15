import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SisiDaratRoutingModule } from './sisi-darat-routing.module';
import { SdCreateComponent } from './sd-create/sd-create.component';
import { SdReadComponent } from './sd-read/sd-read.component';
import { SdUpdateComponent } from './sd-update/sd-update.component';
import { SdDeleteComponent } from './sd-delete/sd-delete.component';

@NgModule({
  declarations: [
            SdCreateComponent, 
            SdReadComponent, 
            SdUpdateComponent, 
            SdDeleteComponent, 
  ],

  imports: [
    CommonModule,
    SisiDaratRoutingModule,
  ]
})
export class SisiDaratModule { }
