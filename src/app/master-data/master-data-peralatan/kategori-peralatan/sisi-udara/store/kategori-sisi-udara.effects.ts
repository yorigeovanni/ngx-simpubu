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

  constructor(
      private actions$: Actions, 
      private kategoriSisiUdaraService: KategoriSisiUdaraService, 
      private store: Store<AppState>) 
      {}

      @Effect()
      query$ = this.actions$.pipe(
        ofType(KategoriSisiUdaraActionTypes.KATEGORI_SISI_UDARA_QUERY),
        withLatestFrom(this.store.pipe(select(getUser))),
        switchMap(([, user]: any) => this.kategoriSisiUdaraService.read(user.id)
          .pipe(
            map((data: any) => {
                
                console.log(data);
              const kategori_sisi_udara_data: KategoriSisiUdara[] = data.map((res: any) => {
                console.log(res.payload.doc.data())
                const key = res.payload.key;
                const data: KategoriSisiUdara = res.payload.doc.data();
                return {
                  key: key,
                  id: data.id,
                  name: data.name,
                  description: data.description
                };
              });
              return (new LocalStateSisiUdaraAction.KategoriSisiUdaraLoaded({ kategori_peralatan_sisi_udara: kategori_sisi_udara_data }));
            }),
            catchError(error => {
                console.log(error);
              return of(new LocalStateSisiUdaraAction.KategoriSisiUdaraError({ error }));
            })
          )
        ),
      );



}
