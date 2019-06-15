import { KategoriPeralatanInitialState, KategoriPeralatanState } from './kategori-peralatan.state';
import { KategoriPeralatanActions, KategoriPeralatanActionTypes } from './kategori-peralatan.actions';


export function projectsReducer(state = KategoriPeralatanInitialState, action: KategoriPeralatanActions): KategoriPeralatanState {
    switch (action.type) {
      default:
        return state;
    }
  }
  