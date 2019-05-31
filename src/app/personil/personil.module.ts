import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonilRoutingModule } from './personil-routing.module';
import { PersonilComponent } from './personil.component';

@NgModule({
  declarations: [PersonilComponent],
  imports: [
    CommonModule,
    PersonilRoutingModule
  ]
})
export class PersonilModule { }
