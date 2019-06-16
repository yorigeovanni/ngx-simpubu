import { createSelector, createFeatureSelector } from '@ngrx/store';
import { KategoriSisiUdaraState } from './kategori-sisi-udara.state';

export const getKategoriSisiUdaraState = createFeatureSelector<KategoriSisiUdaraState>('kategori_peralatan_sisi_udara');

export const getDataKategoriPeralatanSisiUdara = createSelector(
    getKategoriSisiUdaraState,
    kategori_peralatan_sisi_udara => kategori_peralatan_sisi_udara.kategori_sisi_udara
);

export const getIsLoading = createSelector(
    getKategoriSisiUdaraState,
    kategori_sisi_udara => kategori_sisi_udara.isLoading
);

export const getError = createSelector(
    getKategoriSisiUdaraState,
    kategori_sisi_udara => kategori_sisi_udara.error
);
