import { Action } from '@ngrx/store';
import { SisiUdara } from './../models/sisi-udara.model';

export enum SisiUdaraActionTypes {
  SISI_UDARA_QUERY = '[SisiUdara] Load SisiUdara',
  SISI_UDARA_LOADED = '[SisiUdara] Fetched',
  SISI_UDARA_ADDED = '[SisiUdara] Added',
  SISI_UDARA_EDITED = '[SisiUdara] Edited',
  SISI_UDARA_DELETED = '[SisiUdara] Deleted',
  SISI_UDARA_ERROR = '[SisiUdara] Error'
}


export class sisiUdaraQuery implements Action {
  readonly type = SisiUdaraActionTypes.SISI_UDARA_QUERY;
}

export class sisiUdaraLoaded implements Action {
  readonly type = SisiUdaraActionTypes.SISI_UDARA_LOADED;
  constructor(public payload: { sisi_udara : SisiUdara[] }) {}
}

export class sisiUdaraAdded implements Action {
  readonly type = SisiUdaraActionTypes.SISI_UDARA_ADDED;
  constructor(public payload: { sisi_udara: SisiUdara }) {}
}

export class sisiUdaraEdited implements Action {
  readonly type = SisiUdaraActionTypes.SISI_UDARA_EDITED;

  constructor(public payload: { sisi_udara: SisiUdara }) {}
}

export class sisiUdaraDeleted implements Action {
  readonly type = SisiUdaraActionTypes.SISI_UDARA_DELETED;
  constructor(public payload: { sisi_udara: SisiUdara }) {}
}

export class sisiUdaraError implements Action {
  readonly type = SisiUdaraActionTypes.SISI_UDARA_ERROR;
  constructor(public payload: { error: any }) {}
}


export type SisiUdaraActions = 
  | sisiUdaraQuery
  | sisiUdaraLoaded
  |sisiUdaraAdded
  | sisiUdaraEdited
  | sisiUdaraDeleted
  | sisiUdaraError;
