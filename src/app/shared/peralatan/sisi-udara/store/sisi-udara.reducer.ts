import { sisiUdaraInitialState, SisiUdaraState } from './sisi-udara.state';
import { SisiUdaraActions, SisiUdaraActionTypes } from './sisi-udara.actions';



export function sisiUdaraReducer(state = sisiUdaraInitialState, action: SisiUdaraActions): SisiUdaraState {
  switch (action.type) {

    case SisiUdaraActionTypes.SISI_UDARA_QUERY: {
      return Object.assign({}, state, {
        isLoading: true,
      });
    }

    case SisiUdaraActionTypes.SISI_UDARA_LOADED: {
      return Object.assign({}, state, {
       // customers: action.payload.customers,
        isLoading: false,
      });
    }

    case SisiUdaraActionTypes.SISI_UDARA_ERROR: {
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload.error
      });
    }

    default:
      return state;
  }
}
