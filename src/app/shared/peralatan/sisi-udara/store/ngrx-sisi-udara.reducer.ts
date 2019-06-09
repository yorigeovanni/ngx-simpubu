import { Action } from '@ngrx/store';

/*---------------------- ABAIKAN, PAKE STATE DARI LUAR
export interface State {}
export const initialState: State = {};
*/
import {PeralatanSisiUdaraInitialState, PeralatanSisiUdaraState} from './ngrx-sisi-udara.state';
import { NgrxSisiUdaraActions, NgrxSisiUdaraActionTypes } from './ngrx-sisi-udara.actions';



export function Reducer(state = PeralatanSisiUdaraInitialState, action: NgrxSisiUdaraActions): PeralatanSisiUdaraState {
  switch (action.type) {

    case NgrxSisiUdaraActionTypes.CREATE_PERALATAN_SISI_UDARA: {
      return state;
    }

    case NgrxSisiUdaraActionTypes.CREATE_PERALATAN_SISI_UDARA_SUCCESS: {
      console.log('reducer add peralatan');
      return Object.assign({}, state, { peralatan_sisi_udara : null, loading: false });
      
    }

    case NgrxSisiUdaraActionTypes.LOAD_PERALATAN_SISI_UDARA: {
      return state;
    }

    case NgrxSisiUdaraActionTypes.UPDATE_PERALATAN_SISI_UDARA: {
      return state;
    }

    case NgrxSisiUdaraActionTypes.DELETE_PERALATAN_SISI_UDARA: {
      return state;
    }

    default:return state;
  }
}
