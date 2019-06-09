import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './admin-satker/peralatan/sisi-udara/crud/create/create.component';
import { ReadComponent } from './admin-satker/peralatan/sisi-udara/crud/read/read.component';
import { UpdateComponent } from './admin-satker/peralatan/sisi-udara/crud/update/update.component';
import { DeleteComponent } from './admin-satker/peralatan/sisi-udara/crud/delete/delete.component';

@NgModule({
  declarations: [CreateComponent, ReadComponent, UpdateComponent, DeleteComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
