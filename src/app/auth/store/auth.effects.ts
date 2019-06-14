import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, defer } from 'rxjs';
import { map, switchMap, catchError, tap, take } from 'rxjs/operators';

import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

import * as auth from './../store/auth.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';


// EFFECT DIEKSEKUSI KARENA ADA FUNGSI INI --- INJECTABLE
@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}


  @Effect()
  socialLogin$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.SOCIAL_LOGIN),
    map((action: auth.SocialLogin) => action.payload),
    switchMap(payload => this.authService.socialLogin(payload.authProvider)
      .pipe(
        map( (res: any) => {
          console.log(res);
          const user = {
            uid: res.user.uid,
            displayName: res.user.displayName,
            email: res.user.email,
            providerId: res.additionalUserInfo.providerId,
            photoUrl: res.user.photoURL,
            isNewUser: res.additionalUserInfo.isNewUser
          };
          return user;
        }),
        switchMap( (user: User) => {
          if (user.isNewUser) {
            return [
                      new auth.LoginSuccess({ user }),
                      /**
                       * rencana perubahan seteleah login sukses
                       * a. check user if exsist by phone or email
                       * b. SAVE USER DIHILANGKAN

                      **/
                      new auth.SaveUser({ user }),
                      new auth.CheckUserRole({ uid: user.uid })
            ];
          } 
          else {
            return [
                      new auth.LoginSuccess({ user }), 
                      new auth.CheckUserRole({ uid: user.uid })
            ];
          }
        }),

        tap(() => this.router.navigateByUrl('')),
        catchError(error => {
          return of(new auth.AuthError({ error }));
        })
      )
    )
  );


  @Effect()
  loginSuccess$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.LOGIN_SUCCESS),
    map( (action: auth.SaveUser) => action.payload),
    switchMap( (payload: any) => {
        return [
          new auth.UpdateOnlineStatus({ uid: payload.user.uid, status: true }),
          new auth.CheckUserRole( {uid: payload.user.uid }),
          new auth.CheckIsAdminSatker( {uid: payload.user.uid }),
          new auth.CheckIsBKP( {uid: payload.user.uid }),
          new auth.CheckIsBTP( {uid: payload.user.uid }),
          new auth.CheckIsDBU( {uid: payload.user.uid }),
          new auth.CheckIsInspekturPeralatan( {uid: payload.user.uid }),
          new auth.CheckIsInspekturPersonil( {uid: payload.user.uid }),
          new auth.CheckIsInspekturSatker( {uid: payload.user.uid }),
          new auth.CheckIsTeknisi( {uid: payload.user.uid })
        ];
    })
  );

  
  @Effect()
  getUser$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.GET_USER),
    switchMap(() => this.authService.getAuthState()
      .pipe(
        take(1),
        map((authData: any) => {
          if (authData) {
            const user = {
              uid: authData.uid,
              displayName: authData.displayName,
              email: authData.email,
              providerId: authData.providerData[0].providerId,
              photoUrl: authData.photoURL,
            };
            return new auth.LoginSuccess({ user });
          } else {
            return new auth.LoginFailed();
          }
        }),
        catchError(error => of(new auth.AuthError({ error })))
      )
    )
  );

  
  @Effect()
  checkUserRole$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.CHECK_USER_ROLE),
    map( (action: auth.CheckUserRole) => action.payload),
    switchMap( (payload: any) => this.authService.checkUserRole(payload.uid)
      .pipe(
        map( (result: any) => {
          if(!result){
            return new auth.UpdateUserRole({ isAdmin : false });
          }
          else{
            const status_admin : boolean = result.status; 
            return new auth.UpdateUserRole({ isAdmin : status_admin });
          }
          
        }),
        catchError( (error: any) => of(new auth.AuthError({ error })))
      )
    )
  );


  @Effect()
  checkIsAdminSatker$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.CHECK_IS_ADMIN_SATKER),
    map( (action: auth.CheckIsAdminSatker) => action.payload),
    switchMap( (payload: any) => this.authService.checkIsAdminSatker(payload.uid)
      .pipe(
        map( (result: any) => {
          if(!result){
            return new auth.UpdateIsAdminSatker({ isAdminSatker : false });
          }
          else{
            const status_admin_satker : boolean = result.status; 
            return new auth.UpdateIsAdminSatker({ isAdminSatker : status_admin_satker });
          }
          
        }),
        catchError( (error: any) => of(new auth.AuthError({ error })))
      )
    )
  );


  @Effect()
  checkIsBKP$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.CHECK_IS_BKP),
    map( (action: auth.CheckIsBKP) => action.payload),
    switchMap( (payload: any) => this.authService.checkIsBKP(payload.uid)
      .pipe(
        map( (result: any) => {
          if(!result){
            return new auth.UpdateIsBKP({ isBKP : false });
          }
          else{
            const status_is_BKP : boolean = result.status; 
            return new auth.UpdateIsBKP({ isBKP : status_is_BKP });
          }
          
        }),
        catchError( (error: any) => of(new auth.AuthError({ error })))
      )
    )
  );


  @Effect()
  checkIsBTP$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.CHECK_IS_BTP),
    map( (action: auth.CheckIsBTP) => action.payload),
    switchMap( (payload: any) => this.authService.checkIsBTP(payload.uid)
      .pipe(
        map( (result: any) => {
          if(!result){
            return new auth.UpdateIsBTP({ isBTP : false });
          }
          else{
            const status_is_BTP : boolean = result.status; 
            return new auth.UpdateIsBTP({ isBTP : status_is_BTP });
          }
          
        }),
        catchError( (error: any) => of(new auth.AuthError({ error })))
      )
    )
  );


  
  @Effect()
  checkIsDBU$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.CHECK_IS_DBU),
    map( (action: auth.CheckIsDBU) => action.payload),
    switchMap( (payload: any) => this.authService.checkIsDBU(payload.uid)
      .pipe(
        map( (result: any) => {
          if(!result){
            return new auth.UpdateIsDBU({ isDBU : false });
          }
          else{
            const status_is_DBU : boolean = result.status; 
            return new auth.UpdateIsDBU({ isDBU : status_is_DBU });
          }
          
        }),
        catchError( (error: any) => of(new auth.AuthError({ error })))
      )
    )
  );


  @Effect()
  checkIsInspekturPeralatan$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.CHECK_IS_INSPEKTUR_PERALATAN),
    map( (action: auth.CheckIsInspekturPeralatan) => action.payload),
    switchMap( (payload: any) => this.authService.checkIsInspekturPeralatan(payload.uid)
      .pipe(
        map( (result: any) => {
          if(!result){
            return new auth.UpdateIsInspekturPeralatan({ isInspekturPeralatan : false });
          }
          else{
            const status_is_inspektur_peralatan : boolean = result.status; 
            return new auth.UpdateIsInspekturPeralatan({ isInspekturPeralatan : status_is_inspektur_peralatan });
          }
          
        }),
        catchError( (error: any) => of(new auth.AuthError({ error })))
      )
    )
  );


  
  @Effect()
  checkIsInspekturPersonil$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.CHECK_IS_INSPEKTUR_PERSONIL),
    map( (action: auth.CheckIsInspekturPersonil) => action.payload),
    switchMap( (payload: any) => this.authService.checkIsInspekturPersonil(payload.uid)
      .pipe(
        map( (result: any) => {
          if(!result){
            return new auth.UpdateIsInspekturPersonil({ isInspekturPersonil : false });
          }
          else{
            const status_is_inspektur_personil : boolean = result.status; 
            return new auth.UpdateIsInspekturPersonil({ isInspekturPersonil : status_is_inspektur_personil });
          }
          
        }),
        catchError( (error: any) => of(new auth.AuthError({ error })))
      )
    )
  );


  @Effect()
  checkIsInspekturSatker$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.CHECK_IS_INSPEKTUR_SATKER),
    map( (action: auth.CheckIsInspekturSatker) => action.payload),
    switchMap( (payload: any) => this.authService.checkIsInspekturSatker(payload.uid)
      .pipe(
        map( (result: any) => {
          if(!result){
            return new auth.UpdateIsInspekturSatker({ isInspekturSatker : false });
          }
          else{
            const status_is_inspektur_satker : boolean = result.status; 
            return new auth.UpdateIsInspekturSatker({ isInspekturSatker : status_is_inspektur_satker });
          }
          
        }),
        catchError( (error: any) => of(new auth.AuthError({ error })))
      )
    )
  );


  
  @Effect()
  checkIsTeknisi$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.CHECK_IS_TEKNISI),
    map( (action: auth.CheckIsTeknisi) => action.payload),
    switchMap( (payload: any) => this.authService.checkIsTeknisi(payload.uid)
      .pipe(
        map( (result: any) => {
          if(!result){
            return new auth.UpdateIsTeknisi({ isTeknisi : false });
          }
          else{
            const status_is_teknisi : boolean = result.status; 
            return new auth.UpdateIsTeknisi({ isTeknisi : status_is_teknisi });
          }
          
        }),
        catchError( (error: any) => of(new auth.AuthError({ error })))
      )
    )
  );

  
  @Effect({ dispatch: false })
  updateOnlineStatus$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.UPDATE_ONLINE_STATUS),
    map( (action: auth.UpdateOnlineStatus) => action.payload),
    switchMap( (payload: any) => this.authService.updateOnlineStatus(payload.uid, payload.status))
  );


  @Effect()
  updateProfile$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.UPDATE_PROFILE),
    map((action: auth.UpdateProfile) => action.payload),
    switchMap((payload: any) =>
      this.authService.updateProfile(payload.displayName, payload.photoUrl).pipe(
        map( () => {
          const currentUser: any = this.authService.getCurrentUser();
            const updatedUser: any = {
              uid: currentUser.uid || null,
              displayName: currentUser.displayName || null,
              email: currentUser.email || null,
              providerId: currentUser.providerData[0].providerId || null,
              photoUrl: currentUser.photoURL || null
          };
          return new auth.UpdateProfileSuccess( { user: updatedUser });
        }),
        catchError( (error) => of(new auth.AuthError(error)))
      )
    )
  );

  
  @Effect({ dispatch: false })
  saveUser$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.SAVE_USER),
    map( (action: auth.SaveUser) => action.payload),
    switchMap( (payload: any) => this.authService.saveUser(payload.user))
  );

  
  @Effect()
  logoutAction$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.LOGOUT_REQUESTED),
    map( (action: auth.LogoutRequested) => action.payload),
    switchMap((payload: any) => this.authService.logout(payload.user.uid)
      .pipe(
        map(() => (new auth.LogoutCompleted())),
        tap(() => this.router.navigateByUrl('')),
        catchError(error => {
          return of(new auth.AuthError({ error }));
        }
        )
      )
    )
  );


  @Effect()
  init$: Observable<any> = defer(() => {
    return of(new auth.GetUser());
  });
}
