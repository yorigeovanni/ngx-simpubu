import { Action } from '@ngrx/store';
import { KategoriYandar } from '../models/kategori-yandar.model';

export enum KategoriYandarActionTypes {
  KATEGORI_YANDAR_QUERY = '[kategori_peralatan_yandar] Query',
  KATEGORI_YANDAR_LOADED = '[kategori_peralatan_yandar] Fetched',
  KATEGORI_YANDAR_ADDED = '[kategori_peralatan_yandar] Added',
  KATEGORI_YANDAR_EDITED = '[kategori_peralatan_yandar] Edited',
  KATEGORI_YANDAR_DELETED = '[kategori_peralatan_yandar] Deleted',
  KATEGORI_YANDAR_ERROR = '[kategori_peralatan_yandar] Error'
}

export class KategoriYandarQuery implements Action {
  readonly type = KategoriYandarActionTypes.KATEGORI_YANDAR_QUERY;
}

export class KategoriYandarLoaded implements Action {
  readonly type = KategoriYandarActionTypes.KATEGORI_YANDAR_LOADED;

  constructor(public payload: { kategori_peralatan_yandar: KategoriYandar[] }) {}
}

export class KategoriYandarAdded implements Action {
  readonly type = KategoriYandarActionTypes.KATEGORI_YANDAR_ADDED;

  constructor(public payload: { kategori_peralatan_yandar: KategoriYandar }) {}
}

export class KategoriYandarEdited implements Action {
  readonly type = KategoriYandarActionTypes.KATEGORI_YANDAR_EDITED;

  constructor(public payload: { kategori_peralatan_yandar: KategoriYandar }) {}
}

export class KategoriYandarDeleted implements Action {
  readonly type = KategoriYandarActionTypes.KATEGORI_YANDAR_DELETED;

  constructor(public payload: { kategori_peralatan_yandar: KategoriYandar }) {}
}

export class KategoriYandarError implements Action {
  readonly type = KategoriYandarActionTypes.KATEGORI_YANDAR_ERROR;

  constructor(public payload: { error: any }) {}
}

export type KategoriYandarActions =
  | KategoriYandarQuery
  | KategoriYandarLoaded
  | KategoriYandarAdded
  | KategoriYandarEdited
  | KategoriYandarDeleted
  | KategoriYandarError;
