import { ActionReducerMap, MetaReducer, ActionReducer, Action } from '@ngrx/store';

import { AuthState } from '../auth/store/auth.state';
import { SisiUdaraState } from '../shared/peralatan/sisi-udara/store/sisi-udara.state';

import * as fromAuth from '../auth/store/auth.reducer';
import * as  fromSisiUdara  from '../shared/peralatan/sisi-udara/store/sisi-udara.reducer';


export interface AppState {
  auth: AuthState;
  sisiUdara : SisiUdaraState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  sisiUdara: fromSisiUdara.sisiUdaraReducer,
};

export function clearState(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState | undefined, action: Action): AppState {
    if (action.type === '[Auth] LOGOUT completed') {
      state = undefined;
    }
    return reducer(state, action);
  };
}


export const metaReducers: MetaReducer<AppState>[] = [clearState];
