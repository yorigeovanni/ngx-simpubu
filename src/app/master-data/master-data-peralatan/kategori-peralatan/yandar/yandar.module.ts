import { YandarRoutingModule } from './yandar-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';



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
    YandarRoutingModule,
    MDBBootstrapModulesPro,
    FormsModule,
  ]
})


export class YandarModule { }
