import { Action } from '@ngrx/store';
import { KategoriPeralatan } from '../models/kategori-peralatan.model';

export enum KategoriPeralatanActionTypes {
  KATEGORI_PERALATAN_QUERY = '[KategoriPeralatan] Query',
  KATEGORI_PERALATAN_LOADED = '[KategoriPeralatan]  (read)',

  KATEGORI_PERALATAN_ADDED = '[KategoriPeralatan] create',
  KATEGORI_PERALATAN_EDITED = '[KategoriPeralatan] update',
  KATEGORI_PERALATAN_DELETED = '[KategoriPeralatan] Deleted',

  KATEGORI_PERALATAN_ERROR = '[KategoriPeralatan] Error'
}


  export class KategoriPeralatanQuery implements Action {
    readonly type = KategoriPeralatanActionTypes.KATEGORI_PERALATAN_QUERY;
  }
  
  export class KategoriPeralatanLoaded implements Action {
    readonly type = KategoriPeralatanActionTypes.KATEGORI_PERALATAN_LOADED;
  
    constructor(public payload: { kategori_peralatan: KategoriPeralatan[] }) {}
  }
  
  export class KategoriPeralatanAdded implements Action {
    readonly type = KategoriPeralatanActionTypes.KATEGORI_PERALATAN_ADDED;
  
    constructor(public payload: { kategori_peralatan: KategoriPeralatan }) {}
  }
  
  export class KategoriPeralatanEdited implements Action {
    readonly type = KategoriPeralatanActionTypes.KATEGORI_PERALATAN_EDITED;
  
    constructor(public payload: { kategori_peralatan: KategoriPeralatan }) {}
  }
  
  export class KategoriPeralatanDeleted implements Action {
    readonly type = KategoriPeralatanActionTypes.KATEGORI_PERALATAN_DELETED;
  
    constructor(public payload: { kategori_peralatan: KategoriPeralatan }) {}
  }
  
  export class KategoriPeralatanError implements Action {
    readonly type = KategoriPeralatanActionTypes.KATEGORI_PERALATAN_ERROR;
  
    constructor(public payload: { error: any }) {}
  }
  
  export type KategoriPeralatan =
    | KategoriPeralatanQuery
    | KategoriPeralatanLoaded
    |KategoriPeralatanAdded
    | KategoriPeralatanEdited
    | KategoriPeralatanDeleted
    | KategoriPeralatanError;

    

