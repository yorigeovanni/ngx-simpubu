import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SisiUdaraRoutingModule } from './sisi-udara-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SuCreateComponent } from './su-create/su-create.component';
import { SuReadComponent } from './su-read/su-read.component';
import { SuUpdateComponent } from './su-update/su-update.component';
import { SuDeleteComponent } from './su-delete/su-delete.component';
import { SdCreateComponent } from '../sisi-darat/sd-create/sd-create.component';
import { SdReadComponent } from '../sisi-darat/sd-read/sd-read.component';
import { SdUpdateComponent } from '../sisi-darat/sd-update/sd-update.component';
import { SdDeleteComponent } from '../sisi-darat/sd-delete/sd-delete.component';
import { YandarCreateComponent } from '../yandar/yandar-create/yandar-create.component';
import { YandarReadComponent } from '../yandar/yandar-read/yandar-read.component';
import { YandarUpdateComponent } from '../yandar/yandar-update/yandar-update.component';
import { YandarDeleteComponent } from '../yandar/yandar-delete/yandar-delete.component';

@NgModule({
  declarations: [SuCreateComponent, SuReadComponent, SuUpdateComponent, SuDeleteComponent, SdCreateComponent, SdReadComponent, SdUpdateComponent, SdDeleteComponent, YandarCreateComponent, YandarReadComponent, YandarUpdateComponent, YandarDeleteComponent],
  imports: [
    SisiUdaraRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SisiUdaraModule { }
