import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';

// GLOBAL APP STATE
import { AppState } from '../../../../../reducers/index';
import { getUser } from '../../../../../auth/store/auth.selectors';

// MODULE REQUIRED
import { Store, select } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

// LOCAL COMPONENT STATE ACTIONS
import { KategoriSisiUdaraActionTypes } from './kategori-sisi-udara.actions';
import * as LocalStateSisiUdaraAction from './../store/kategori-sisi-udara.actions';


import { KategoriSisiUdara } from '../models/kategori-sisi-udara.model';
import { KategoriSisiUdaraService } from '../services/kategori-sisi-udara.service';





@Injectable()
export class SisiUDaraEffects {

  constructor(private actions$: Actions, private customersService: KategoriSisiUdaraService, private store: Store<AppState>) {}

}
