import { Action } from '@ngrx/store';

export enum NgrxSisiDaratActionTypes {
  LoadNgrxSisiDarats = '[NgrxSisiDarat] Load NgrxSisiDarats',
  
  
}

export class LoadNgrxSisiDarats implements Action {
  readonly type = NgrxSisiDaratActionTypes.LoadNgrxSisiDarats;
}


export type NgrxSisiDaratActions = LoadNgrxSisiDarats;
