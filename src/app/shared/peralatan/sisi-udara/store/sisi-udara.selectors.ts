import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SisiUdaraState } from './sisi-udara.state';

export const getSisiUdaraState = createFeatureSelector<SisiUdaraState>('sisiUdara');

export const getSisiUdara = createSelector(
  getSisiUdaraState,
  sisiUdara => sisiUdara.sisiUdara
);

export const getIsLoading = createSelector(
  getSisiUdaraState,
  sisiUdara => sisiUdara.isLoading
);

export const getError = createSelector(
  getSisiUdaraState,
  sisiUdara => sisiUdara.error
);
