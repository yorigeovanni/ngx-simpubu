import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponent } from './peralatan/sisi-udara/crud/create/create.component';
import { ReadComponent } from './peralatan/sisi-udara/crud/read/read.component';
import { UpdateComponent } from './peralatan/sisi-udara/crud/update/update.component';
import { DeleteComponent } from './peralatan/sisi-udara/crud/delete/delete.component';
import { PrintComponent } from './peralatan/sisi-udara/print/print.component';


import { SharedPeralatanSisiDaratCreateComponent } from './peralatan/sisi-darat/crud/create/create.component';
import { SharedPeralatanSisiDaratReadComponent } from './peralatan/sisi-darat/crud/read/read.component';
import { SharedPeralatanSisiDaratUpdateComponent } from './peralatan/sisi-darat/crud/update/update.component';
import { SharedPeralatanSisiDaratDeleteComponent } from './peralatan/sisi-darat/crud/delete/delete.component';
import { SharedPeralatanSisiDaratPrintComponent } from './peralatan/sisi-darat/print/print.component';


import { SharedPeralatanYandarCreateComponent } from './peralatan/yandar/crud/create/create.component';
import { SharedPeralatanYandarReadComponent } from './peralatan/yandar/crud/read/read.component';
import { SharedPeralatanYandarUpdateComponent } from './peralatan/yandar/crud/update/update.component';
import { SharedPeralatanYandarDeleteComponent } from './peralatan/yandar/crud/delete/delete.component';
import { SharedPeralatanYandarPrintComponent } from './peralatan/yandar/print/print.component';



@NgModule({
  declarations: [
     CreateComponent,
     ReadComponent, 
     UpdateComponent, 
     DeleteComponent,
     PrintComponent,

     SharedPeralatanSisiDaratCreateComponent,
     SharedPeralatanSisiDaratReadComponent,
     SharedPeralatanSisiDaratUpdateComponent,
     SharedPeralatanSisiDaratDeleteComponent,
     SharedPeralatanSisiDaratPrintComponent,

     SharedPeralatanYandarCreateComponent,
     SharedPeralatanYandarReadComponent,
     SharedPeralatanYandarUpdateComponent,
     SharedPeralatanYandarDeleteComponent,
     SharedPeralatanYandarPrintComponent,






  ],

  imports: [
              CommonModule
           ],
  
  exports : [
     CreateComponent,
     ReadComponent, 
     UpdateComponent, 
     DeleteComponent,
     PrintComponent,

     SharedPeralatanSisiDaratCreateComponent,
     SharedPeralatanSisiDaratReadComponent,
     SharedPeralatanSisiDaratUpdateComponent,
     SharedPeralatanSisiDaratDeleteComponent,
     SharedPeralatanSisiDaratPrintComponent,

     SharedPeralatanYandarCreateComponent,
     SharedPeralatanYandarReadComponent,
     SharedPeralatanYandarUpdateComponent,
     SharedPeralatanYandarDeleteComponent,
     SharedPeralatanYandarPrintComponent,
  ],
})


export class SharedModule { }
