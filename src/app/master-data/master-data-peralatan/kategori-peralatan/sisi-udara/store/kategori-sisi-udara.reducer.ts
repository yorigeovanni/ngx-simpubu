import { KategoriSisiUdaraInitialState, KategoriSisiUdaraState } from './kategori-sisi-udara.state';
import { KategoriSisiUdaraActions, KategoriSisiUdaraActionTypes } from './kategori-sisi-udara.actions';

export function  KategoriSisiUdaraReducer(state = KategoriSisiUdaraInitialState, action: KategoriSisiUdaraActions): KategoriSisiUdaraState {
  switch (action.type) {


    case KategoriSisiUdaraActionTypes.KATEGORI_SISI_UDARA_QUERY: {
        return Object.assign({}, state, {
          isLoading: true,
        });
      }
  
      case KategoriSisiUdaraActionTypes.KATEGORI_SISI_UDARA_LOADED: {
          console.log(action.payload.kategori_peralatan_sisi_udara);
        return Object.assign({}, state, {
          kategori_peralatan_sisi_udara : action.payload.kategori_peralatan_sisi_udara,
          isLoading: false,
        });
      }
  
      case KategoriSisiUdaraActionTypes.KATEGORI_SISI_UDARA_ERROR: {
        return Object.assign({}, state, {
          isLoading: false,
          error: action.payload.error
        });
      }

    

    default:
      return state;
  }
}
