import { Action } from '@ngrx/store';

export enum SisiUdaraActionTypes {
  LoadSisiUdaras = '[SisiUdara] Load SisiUdaras',
  
  
}

export class LoadSisiUdaras implements Action {
  readonly type = SisiUdaraActionTypes.LoadSisiUdaras;
}


export type SisiUdaraActions = LoadSisiUdaras;
