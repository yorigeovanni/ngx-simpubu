import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YandarRoutingModule } from './yandar-routing.module';
import { YandarCreateComponent } from './yandar-create/yandar-create.component';
import { YandarReadComponent } from './yandar-read/yandar-read.component';
import { YandarUpdateComponent } from './yandar-update/yandar-update.component';
import { YandarDeleteComponent } from './yandar-delete/yandar-delete.component';

@NgModule({
  declarations: [
    YandarCreateComponent, 
    YandarReadComponent, 
    YandarUpdateComponent, 
    YandarDeleteComponent
  ],
  imports: [
    CommonModule,
    YandarRoutingModule
  ]
})
export class YandarModule { }
