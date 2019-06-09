import { Action } from '@ngrx/store';
import { PeralatanSisiUdara } from '../../models/peralatan-sisi-udara.model';

export enum NgrxSisiUdaraActionTypes {
  // CREATE - CRUD
  CREATE_PERALATAN_SISI_UDARA = '[NgrxSisiUdara] Create Peralatan Sisi Udara',
  CREATE_PERALATAN_SISI_UDARA_SUCCESS = '[NgrxSisiUdara] Create Peralatan Sisi Udara success',
  CREATE_PERALATAN_SISI_UDARA_FAIL = '[NgrxSisiUdara] Create Peralatan Sisi Udara gagal',

  // READ - CRUD
  LOAD_PERALATAN_SISI_UDARA = '[NgrxSisiUdara] Load Peralatan Sisi Udara',
  LOAD_PERALATAN_SISI_UDARA_SUCCESS = '[NgrxSisiUdara] Load Peralatan Sisi Udara success',
  LOAD_PERALATAN_SISI_UDARA_FAIL = '[NgrxSisiUdara] Load Peralatan Sisi Udara fail',

  // UPDATE - CRUD
  UPDATE_PERALATAN_SISI_UDARA = '[NgrxSisiUdara] Update Peralatan Sisi Udara',
  UPDATE_PERALATAN_SISI_UDARA_SUCCESS = '[NgrxSisiUdara] Update Peralatan Sisi Udara success',
  UPDATE_PERALATAN_SISI_UDARA_FAIL = '[NgrxSisiUdara] Update Peralatan Sisi Udara gagal',

  // DELETE - CRUD
  DELETE_PERALATAN_SISI_UDARA = '[NgrxSisiUdara] Delete Peralatan Sisi Udara',
  DELETE_PERALATAN_SISI_UDARA_SUCCESS = '[NgrxSisiUdara] Delete Peralatan Sisi Udara success',
  DELETE_PERALATAN_SISI_UDARA_FAIL = '[NgrxSisiUdara] Delete Peralatan Sisi Udara gagal',
}


// ============================================================================== CRUD - CREATE
export class createPeralatanSisiUdara implements Action {
  readonly type = NgrxSisiUdaraActionTypes.CREATE_PERALATAN_SISI_UDARA;
  constructor(public payload: { new_peralatan_sisi_udara : PeralatanSisiUdara}) {}
}

export class createPeralatanSisiUdaraSuccess implements Action {
  readonly type = NgrxSisiUdaraActionTypes.CREATE_PERALATAN_SISI_UDARA_SUCCESS;
}

export class createPeralatanSisiUdaraFail implements Action {
  readonly type = NgrxSisiUdaraActionTypes.CREATE_PERALATAN_SISI_UDARA_FAIL;
}


// ============================================================================== CRUD - READ
export class loadPeralatanSisiUdara implements Action {
  readonly type = NgrxSisiUdaraActionTypes.LOAD_PERALATAN_SISI_UDARA;
  constructor(public payload: { new_peralatan_sisi_udara : PeralatanSisiUdara}) {}
}

export class loadPeralatanSisiUdaraSuccess implements Action {
  readonly type = NgrxSisiUdaraActionTypes.LOAD_PERALATAN_SISI_UDARA_SUCCESS;
}

export class loadPeralatanSisiUdaraFail implements Action {
  readonly type = NgrxSisiUdaraActionTypes.LOAD_PERALATAN_SISI_UDARA_FAIL;
}


// ================================================================================ CRUD - UPDATE
export class updatePeralatanSisiUdara implements Action {
  readonly type = NgrxSisiUdaraActionTypes.UPDATE_PERALATAN_SISI_UDARA;
  constructor(public payload: { new_peralatan_sisi_udara : PeralatanSisiUdara}) {}
}

export class updatePeralatanSisiUdaraSuccess implements Action {
  readonly type = NgrxSisiUdaraActionTypes.UPDATE_PERALATAN_SISI_UDARA_SUCCESS;
}

export class updatePeralatanSisiUdaraFail implements Action {
  readonly type = NgrxSisiUdaraActionTypes.UPDATE_PERALATAN_SISI_UDARA_FAIL;
}


// ================================================================================ CRUD - DELETE
export class deletePeralatanSisiUdara implements Action {
  readonly type = NgrxSisiUdaraActionTypes.DELETE_PERALATAN_SISI_UDARA;
  constructor(public payload: { new_peralatan_sisi_udara : PeralatanSisiUdara}) {}
}

export class deletePeralatanSisiUdaraSuccess implements Action {
  readonly type = NgrxSisiUdaraActionTypes.DELETE_PERALATAN_SISI_UDARA_SUCCESS;
}

export class deletePeralatanSisiUdaraFail implements Action {
  readonly type = NgrxSisiUdaraActionTypes.DELETE_PERALATAN_SISI_UDARA_FAIL;
}



export type NgrxSisiUdaraActions = 
| createPeralatanSisiUdara
| createPeralatanSisiUdaraSuccess
| createPeralatanSisiUdaraFail
| loadPeralatanSisiUdara
| loadPeralatanSisiUdaraSuccess
| loadPeralatanSisiUdaraFail
| updatePeralatanSisiUdara
| updatePeralatanSisiUdaraSuccess
| updatePeralatanSisiUdaraFail
| deletePeralatanSisiUdara
| deletePeralatanSisiUdaraSuccess
| deletePeralatanSisiUdaraFail;
