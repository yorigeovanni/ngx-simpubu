import { KategoriSisiDarat } from '../models/kategori-sisi-darat.model'

export interface KategoriSisiDaratState {
    kategori_sisi_darat : KategoriSisiDarat[] | null;
    isLoading : boolean;
    error : any;
}

export const KategoriSisiDaratInitialState: KategoriSisiDaratState = {
    kategori_sisi_darat : null,
    isLoading : true,
    error : null
};
