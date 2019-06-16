import { KategoriSisiUdara } from '../models/kategori-sisi-udara.model'

export interface KategoriSisiUdaraState {
    kategori_sisi_udara : KategoriSisiUdara[] | null;
    isLoading : boolean;
    error : any;
}

export const KategoriSisiUdaraInitialState: KategoriSisiUdaraState = {
    kategori_sisi_udara : null,
    isLoading : true,
    error : null
};
