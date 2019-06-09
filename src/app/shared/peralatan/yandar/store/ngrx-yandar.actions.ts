import { Action } from '@ngrx/store';

export enum NgrxYandarActionTypes {
  LoadNgrxYandars = '[NgrxYandar] Load NgrxYandars',
  
  
}

export class LoadNgrxYandars implements Action {
  readonly type = NgrxYandarActionTypes.LoadNgrxYandars;
}


export type NgrxYandarActions = LoadNgrxYandars;
