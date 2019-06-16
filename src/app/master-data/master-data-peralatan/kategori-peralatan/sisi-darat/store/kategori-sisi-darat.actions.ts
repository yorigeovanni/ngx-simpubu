import { Action } from '@ngrx/store';
import { KategoriSisiDarat } from '../models/kategori-sisi-darat.model';

export enum KategoriSisiDaratActionTypes {
  KATEGORI_SISI_DARAT_QUERY = '[kategori_peralatan_sisi_darat] Query',
  KATEGORI_SISI_DARAT_LOADED = '[kategori_peralatan_sisi_darat] Fetched',
  KATEGORI_SISI_DARAT_ADDED = '[kategori_peralatan_sisi_darat] Added',
  KATEGORI_SISI_DARAT_EDITED = '[kategori_peralatan_sisi_darat] Edited',
  KATEGORI_SISI_DARAT_DELETED = '[kategori_peralatan_sisi_darat] Deleted',
  KATEGORI_SISI_DARAT_ERROR = '[kategori_peralatan_sisi_darat] Error'
}

export class KategoriSisiDaratQuery implements Action {
  readonly type = KategoriSisiDaratActionTypes.KATEGORI_SISI_DARAT_QUERY;
}

export class  KategoriSisiDaratLoaded implements Action {
  readonly type = KategoriSisiDaratActionTypes.KATEGORI_SISI_DARAT_LOADED;

  constructor(public payload: { kategori_peralatan_sisi_darat: KategoriSisiDarat[] }) {}
}

export class  KategoriSisiDaratAdded implements Action {
  readonly type = KategoriSisiDaratActionTypes.KATEGORI_SISI_DARAT_ADDED;

  constructor(public payload: { kategori_peralatan_sisi_darat: KategoriSisiDarat }) {}
}

export class  KategoriSisiDaratEdited implements Action {
  readonly type = KategoriSisiDaratActionTypes.KATEGORI_SISI_DARAT_EDITED;

  constructor(public payload: { kategori_peralatan_sisi_darat: KategoriSisiDarat }) {}
}

export class  KategoriSisiDaratDeleted implements Action {
  readonly type = KategoriSisiDaratActionTypes.KATEGORI_SISI_DARAT_DELETED;

  constructor(public payload: { kategori_peralatan_sisi_darat: KategoriSisiDarat }) {}
}

export class  KategoriSisiDaratError implements Action {
  readonly type = KategoriSisiDaratActionTypes.KATEGORI_SISI_DARAT_ERROR;

  constructor(public payload: { error: any }) {}
}

export type CustomersActions =
  |  KategoriSisiDaratQuery
  |  KategoriSisiDaratLoaded
  |  KategoriSisiDaratAdded
  |  KategoriSisiDaratEdited
  |  KategoriSisiDaratDeleted
  |  KategoriSisiDaratError;
