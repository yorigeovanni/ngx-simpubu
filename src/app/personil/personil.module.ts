import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

import { PersonilRoutingModule } from './personil-routing.module';
import { PersonilComponent } from './personil.component';

@NgModule({
  declarations: [PersonilComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModulesPro,
    PersonilRoutingModule
  ]
})
export class PersonilModule { }
