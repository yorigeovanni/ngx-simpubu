import { createSelector } from '@ngrx/store';
import { AppState } from '../../reducers';

export const getAuthState = (state: AppState) => state.auth;
export const getUser = createSelector( getAuthState, auth => auth.user );
export const getIsAdmin = createSelector( getAuthState, auth => auth.isAdmin);

export const getIsAdminSatker = createSelector( getAuthState, auth => auth.isAdminSatker);
export const getIsTeknisi = createSelector( getAuthState, auth => auth.isTeknisi);

export const getIsDBU = createSelector( getAuthState, auth => auth.isDBU);
export const getIsBTP = createSelector( getAuthState, auth => auth.isBTP);
export const getIsBKP = createSelector( getAuthState, auth => auth.isBKP);

export const getIsInspekturPeralatan = createSelector( getAuthState, auth => auth.isInspekturPeralatan);
export const getIsInspekturPersonil = createSelector( getAuthState, auth => auth.isInspekturPersonil);
export const getIsInspekturSatker = createSelector( getAuthState, auth => auth.isInspekturSatker);

export const getIsLoggedIn = createSelector( getAuthState, auth => auth.isLoggedIn );
export const getIsExist = createSelector( getAuthState, auth => auth.isExist );
export const getIsLoading = createSelector( getAuthState, auth => auth.isLoading );
export const getError = createSelector( getAuthState, auth => auth.error);
