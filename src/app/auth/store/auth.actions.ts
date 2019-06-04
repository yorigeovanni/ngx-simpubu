import { User } from '../models/user.model';
import { Action } from '@ngrx/store';


export enum AuthActionTypes {

  SOCIAL_LOGIN = '[Auth] Social media login',
  LOGIN_SUCCESS = '[Auth] LOGIN Success',
  LOGIN_FAILED = '[Auth] LOGIN Failed',

  GET_USER = '[Auth] GET User',
  CHECK_USER_ROLE = '[Auth] Check user role',
  UPDATE_USER_ROLE = '[Auth] Update user role',
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
  | UpdateOnlineStatus
  | UpdateProfile
  | UpdateProfileSuccess
  | SaveUser
  | LogoutRequested
  | LogoutCompleted
  | AuthError;
