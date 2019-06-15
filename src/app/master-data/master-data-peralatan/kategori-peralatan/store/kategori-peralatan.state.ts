import { KategoriPeralatan } from './../models/kategori-peralatan.model';

export interface KategoriPeralatanState {
  state_kategori_peralatan: KategoriPeralatan[] | null;
  loading: boolean;
  error: any;
}

export const KategoriPeralatanInitialState: KategoriPeralatanState = {
    state_kategori_peralatan : null,
    loading: true,
    error: null
};
