import { KategoriYandar } from '../models/kategori-yandar.model'

export interface KategoriYandarState {
    kategori_yandar : KategoriYandar[] | null;
    isLoading : boolean;
    error : any;
}

export const KategoriYandarInitialState: KategoriYandarState = {
    kategori_yandar : null,
    isLoading : true,
    error : null
};
