import { authInitialState, AuthState } from './auth.state';
import { AuthAction, AuthActionTypes } from './auth.actions';


export function authReducer(state = authInitialState, action: AuthAction): AuthState {

  switch (action.type) {

    case AuthActionTypes.LOGIN_SUCCESS: {return Object.assign({}, state, { 
      user: action.payload.user, 
      isLoggedIn: true, 
      isLoading: false, 
      error: null 
    });}
    
    case AuthActionTypes.UPDATE_PROFILE_SUCCESS: {return Object.assign({}, state, { 
      user: action.payload.user, 
    });}

    case AuthActionTypes.UPDATE_USER_ROLE: {return Object.assign({}, state, {
      isAdmin: action.payload.isAdmin, 
    });}

    case AuthActionTypes.UPDATE_IS_ADMIN_SATKER: {return Object.assign({}, state, {
      isAdminSatker: action.payload.isAdminSatker, 
    });}

    case AuthActionTypes.UPDATE_IS_BKP: {return Object.assign({}, state, {
      isBKP: action.payload.isBKP, 
    });}

    case AuthActionTypes.UPDATE_IS_BTP: {return Object.assign({}, state, {
      isBTP: action.payload.isBTP, 
    });}

    case AuthActionTypes.UPDATE_IS_DBU: {return Object.assign({}, state, {
      isDBU: action.payload.isDBU, 
    });}

    case AuthActionTypes.UPDATE_IS_INSPEKTUR_PERALATAN: {return Object.assign({}, state, {
      isInspekturPeralatan: action.payload.isInspekturPeralatan,
    });}
    
    case AuthActionTypes.UPDATE_IS_INSPEKTUR_PERSONIL: {return Object.assign({}, state, {
      isInspekturPersonil: action.payload.isInspekturPersonil,
    });}
    
    case AuthActionTypes.UPDATE_IS_INSPEKTUR_SATKER: {return Object.assign({}, state, {
      isInspekturSatker: action.payload.isInspekturSatker, 
    });}
    
    case AuthActionTypes.UPDATE_IS_TEKNISI: {return Object.assign({}, state, {
      isTeknisi: action.payload.isTeknisi,
    });}

    case AuthActionTypes.LOGIN_FAILED: { return Object.assign({}, state, { 
      user: null, 
      isLoading: false, 
      isLoggedIn: false 
    });}
    
    case AuthActionTypes.AUTH_ERROR: { return Object.assign({}, state, {
       error: action.payload.error 
    });}

    case AuthActionTypes.LOGOUT_COMPLETED: { return Object.assign({}, state, {
      user: null,
      isLoading: false,
      isLoggedIn: false,
      isAdmin: false,
     });}

    default: return state; 
  }

}
