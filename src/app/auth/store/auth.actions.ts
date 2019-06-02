import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

export enum AuthActionTypes {


  UPDATE_PROFILE = '[Auth] Update profile',
  UPDATE_PROFILE_SUCCESS = '[Auth] Update profile success',

  LOGIN_REQUESTED = '[Auth] LOGIN Requested',
  LOGIN_SUCCESS = '[Auth] LOGIN Success',
  LOGIN_FAILED = '[Auth] LOGIN Failed',

  SOCIAL_LOGIN = '[Auth] Social media login',

  SAVE_USER = '[Auth] Save user',
  UPDATE_ONLINE_STATUS = '[Auth] Update online status',

  CHECK_USER_ROLE = '[Auth] Check user role',
  UPDATE_USER_ROLE = '[Auth] Update user role',



  GET_USER = '[Auth] GET User',

  AUTH_ERROR = '[Auth] Error',

  LOGOUT_REQUESTED = '[Auth] LOGOUT requested',
  LOGOUT_COMPLETED = '[Auth] LOGOUT completed'

}


export class SaveUser implements Action {
  readonly type = AuthActionTypes.SAVE_USER;
  constructor(public payload: { user: User }) {}
}



export class LoginRequested implements Action {
  readonly type = AuthActionTypes.LOGIN_REQUESTED;
  constructor(public payload: { email: string; password: string }) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: { user: User }) {}
}

export class LoginFailed implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILED;
}

export class SocialLogin implements Action {
  readonly type = AuthActionTypes.SOCIAL_LOGIN;
  constructor(public payload: { authProvider: string }) {}
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
  constructor(public payload: { user: User }) {}
}

export class LogoutCompleted implements Action {
  readonly type = AuthActionTypes.LOGOUT_COMPLETED;
}


export class UpdateOnlineStatus implements Action {
  readonly type = AuthActionTypes.UPDATE_ONLINE_STATUS;
  constructor(public payload: { uid: string, status: boolean }) {}
}


export class AuthError implements Action {
  readonly type = AuthActionTypes.AUTH_ERROR;
  constructor(public payload: { error: any }) {}
}



export type AuthAction =

  | UpdateProfile
  | UpdateProfileSuccess
  | LoginRequested
  | LoginSuccess
  | LoginFailed
  | SocialLogin
  | LogoutRequested
  | LogoutCompleted
  | SaveUser
  | UpdateOnlineStatus
  | CheckUserRole
  | UpdateUserRole
  | GetUser
  | AuthError;
