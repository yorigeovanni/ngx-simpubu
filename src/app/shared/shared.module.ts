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
  ],
})


export class SharedModule { }
