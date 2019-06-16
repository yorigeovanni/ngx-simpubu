import { Action } from '@ngrx/store';
import { KategoriSisiUdara } from '../models/kategori-sisi-udara.model';

export enum KategoriSisiUdaraActionTypes {
  KATEGORI_SISI_UDARA_QUERY = '[kategori_peralatan_sisi_udara] Query',
  KATEGORI_SISI_UDARA_LOADED = '[kategori_peralatan_sisi_udara] Fetched',
  KATEGORI_SISI_UDARA_ADDED = '[kategori_peralatan_sisi_udara] Added',
  KATEGORI_SISI_UDARA_EDITED = '[kategori_peralatan_sisi_udara] Edited',
  KATEGORI_SISI_UDARA_DELETED = '[kategori_peralatan_sisi_udara] Deleted',
  KATEGORI_SISI_UDARA_ERROR = '[kategori_peralatan_sisi_udara] Error'
}

export class KategoriSisiUdaraQuery implements Action {
  readonly type = KategoriSisiUdaraActionTypes.KATEGORI_SISI_UDARA_QUERY;
}

export class KategoriSisiUdaraLoaded implements Action {
  readonly type = KategoriSisiUdaraActionTypes.KATEGORI_SISI_UDARA_LOADED;

  constructor(public payload: { kategori_peralatan_sisi_udara: KategoriSisiUdara[] }) {}
}

export class KategoriSisiUdaraAdded implements Action {
  readonly type = KategoriSisiUdaraActionTypes.KATEGORI_SISI_UDARA_ADDED;

  constructor(public payload: { kategori_peralatan_sisi_udara: KategoriSisiUdara }) {}
}

export class KategoriSisiUdaraEdited implements Action {
  readonly type = KategoriSisiUdaraActionTypes.KATEGORI_SISI_UDARA_EDITED;

  constructor(public payload: { kategori_peralatan_sisi_udara: KategoriSisiUdara }) {}
}

export class KategoriSisiUdaraDeleted implements Action {
  readonly type = KategoriSisiUdaraActionTypes.KATEGORI_SISI_UDARA_DELETED;

  constructor(public payload: { kategori_peralatan_sisi_udara: KategoriSisiUdara }) {}
}

export class KategoriSisiUdaraError implements Action {
  readonly type = KategoriSisiUdaraActionTypes.KATEGORI_SISI_UDARA_ERROR;

  constructor(public payload: { error: any }) {}
}

export type KategoriSisiUdaraActions =
  | KategoriSisiUdaraQuery
  | KategoriSisiUdaraLoaded
  | KategoriSisiUdaraAdded
  | KategoriSisiUdaraEdited
  | KategoriSisiUdaraDeleted
  | KategoriSisiUdaraError;
