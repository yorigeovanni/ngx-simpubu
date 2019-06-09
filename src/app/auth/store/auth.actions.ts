import { User } from '../models/user.model';
import { Action } from '@ngrx/store';


export enum AuthActionTypes {

  SOCIAL_LOGIN = '[Auth] Social media login',
  LOGIN_SUCCESS = '[Auth] LOGIN Success',
  LOGIN_FAILED = '[Auth] LOGIN Failed',

  GET_USER = '[Auth] GET User',

  CHECK_USER_ROLE = '[Auth] Check user role',
  UPDATE_USER_ROLE = '[Auth] Update user role',

  CHECK_IS_ADMIN_SATKER = '[Auth] Check is admin satker',
  UPDATE_IS_ADMIN_SATKER = '[Auth] Update is admin satker',

  CHECK_IS_BKP = '[Auth] Check is BKP',
  UPDATE_IS_BKP = '[Auth] Update is BKP',

  CHECK_IS_BTP = '[Auth] Check is BTP',
  UPDATE_IS_BTP = '[Auth] Update is BTP',

  CHECK_IS_DBU = '[Auth] Check is DBU',
  UPDATE_IS_DBU = '[Auth] Update is DBU',

  CHECK_IS_INSPEKTUR_PERALATAN = '[Auth] Check is inspektur peralatan',
  UPDATE_IS_INSPEKTUR_PERALATAN = '[Auth] Update is inspektur peralatan',

  CHECK_IS_INSPEKTUR_PERSONIL = '[Auth] Check is inspektur personil',
  UPDATE_IS_INSPEKTUR_PERSONIL = '[Auth] Update is inspektur personil',

  CHECK_IS_INSPEKTUR_SATKER = '[Auth] Check is inspektur satker',
  UPDATE_IS_INSPEKTUR_SATKER = '[Auth] Update is inspektur satker',

  CHECK_IS_TEKNISI = '[Auth] Check is teknisi',
  UPDATE_IS_TEKNISI = '[Auth] Update is inspektur teknisi',

  UPDATE_ONLINE_STATUS = '[Auth] Update online status',

  UPDATE_PROFILE = '[Auth] Update profile',
  UPDATE_PROFILE_SUCCESS = '[Auth] Update profile success',
  SAVE_USER = '[Auth] Save user',

  LOGOUT_REQUESTED = '[Auth] LOGOUT requested',
  LOGOUT_COMPLETED = '[Auth] LOGOUT completed',
  AUTH_ERROR = '[Auth] Error'

}


export class SocialLogin implements Action {
  readonly type = AuthActionTypes.SOCIAL_LOGIN;
  constructor(public payload: { authProvider: string }) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: { user: User }) {}
}

export class LoginFailed implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILED;
}

export class GetUser implements Action {
  readonly type = AuthActionTypes.GET_USER;
}


export class CheckUserRole implements Action {
  readonly type = AuthActionTypes.CHECK_USER_ROLE;
  constructor(public payload: { uid: string }) {}
}

export class UpdateUserRole implements Action {
  readonly type = AuthActionTypes.UPDATE_USER_ROLE;
  constructor(public payload: { isAdmin: boolean }) {}
}



export class CheckIsAdminSatker implements Action {
  readonly type = AuthActionTypes.CHECK_IS_ADMIN_SATKER;
  constructor(public payload: { uid: string }) {}
}

export class UpdateIsAdminSatker implements Action {
  readonly type = AuthActionTypes.UPDATE_IS_ADMIN_SATKER;
  constructor(public payload: { isAdminSatker: boolean }) {}
}




export class CheckIsBKP implements Action {
  readonly type = AuthActionTypes.CHECK_IS_BKP;
  constructor(public payload: { uid: string }) {}
}

export class UpdateIsBKP implements Action {
  readonly type = AuthActionTypes.UPDATE_IS_BKP;
  constructor(public payload: { isBKP: boolean }) {}
}



export class CheckIsBTP implements Action {
  readonly type = AuthActionTypes.CHECK_IS_BTP;
  constructor(public payload: { uid: string }) {}
}

export class UpdateIsBTP implements Action {
  readonly type = AuthActionTypes.UPDATE_IS_BTP;
  constructor(public payload: { isBTP: boolean }) {}
}



export class CheckIsDBU implements Action {
  readonly type = AuthActionTypes.CHECK_IS_DBU;
  constructor(public payload: { uid: string }) {}
}

export class UpdateIsDBU implements Action {
  readonly type = AuthActionTypes.UPDATE_IS_DBU;
  constructor(public payload: { isDBU: boolean }) {}
}



export class CheckIsInspekturPeralatan implements Action {
  readonly type = AuthActionTypes.CHECK_IS_INSPEKTUR_PERALATAN;
  constructor(public payload: { uid: string }) {}
}

export class UpdateIsInspekturPeralatan implements Action {
  readonly type = AuthActionTypes.UPDATE_IS_INSPEKTUR_PERALATAN;
  constructor(public payload: { isInspekturPeralatan: boolean }) {}
}



export class CheckIsInspekturPersonil implements Action {
  readonly type = AuthActionTypes.CHECK_IS_INSPEKTUR_PERSONIL;
  constructor(public payload: { uid: string }) {}
}

export class UpdateIsInspekturPersonil implements Action {
  readonly type = AuthActionTypes.UPDATE_IS_INSPEKTUR_PERSONIL;
  constructor(public payload: { isInspekturPersonil: boolean }) {}
}



export class CheckIsInspekturSatker implements Action {
  readonly type = AuthActionTypes.CHECK_IS_INSPEKTUR_SATKER;
  constructor(public payload: { uid: string }) {}
}

export class UpdateIsInspekturSatker implements Action {
  readonly type = AuthActionTypes.UPDATE_IS_INSPEKTUR_SATKER;
  constructor(public payload: { isInspekturSatker: boolean }) {}
}


export class CheckIsTeknisi implements Action {
  readonly type = AuthActionTypes.CHECK_IS_TEKNISI;
  constructor(public payload: { uid: string }) {}
}

export class UpdateIsTeknisi implements Action {
  readonly type = AuthActionTypes.UPDATE_IS_TEKNISI;
  constructor(public payload: { isTeknisi: boolean }) {}
}



export class UpdateOnlineStatus implements Action {
  readonly type = AuthActionTypes.UPDATE_ONLINE_STATUS;
  constructor(public payload: { uid: string, status: boolean }) {}
}

export class SaveUser implements Action {
  readonly type = AuthActionTypes.SAVE_USER;
  constructor(public payload: { user: User }) {}
}

export class UpdateProfile implements Action {
  readonly type = AuthActionTypes.UPDATE_PROFILE;
  constructor(public payload: { displayName: string, photoUrl: string }) {}
}

export class UpdateProfileSuccess implements Action {
  readonly type = AuthActionTypes.UPDATE_PROFILE_SUCCESS;
  constructor(public payload: { user: User }) {}
}


export class LogoutRequested implements Action {
  readonly type = AuthActionTypes.LOGOUT_REQUESTED;
  constructor(public payload: {
     user: User, 
  }) {}
}

export class LogoutCompleted implements Action {
  readonly type = AuthActionTypes.LOGOUT_COMPLETED;
}

export class AuthError implements Action {
  readonly type = AuthActionTypes.AUTH_ERROR;
  constructor(public payload: { error: any }) {}
}



export type AuthAction =
  | SocialLogin
  | LoginSuccess
  | LoginFailed
  | GetUser
  | CheckUserRole
  | UpdateUserRole
  | CheckIsAdminSatker
  | UpdateIsAdminSatker
  | CheckIsBKP
  | UpdateIsBKP
  | CheckIsBTP
  | UpdateIsBTP
  | CheckIsDBU
  | UpdateIsDBU
  | CheckIsInspekturPeralatan
  | UpdateIsInspekturPeralatan
  | CheckIsInspekturPersonil
  | UpdateIsInspekturPersonil
  | CheckIsInspekturSatker
  | UpdateIsInspekturSatker
  | CheckIsTeknisi
  | UpdateIsTeknisi
  | UpdateOnlineStatus
  | UpdateProfile
  | UpdateProfileSuccess
  | SaveUser
  | LogoutRequested
  | LogoutCompleted
  | AuthError;
