import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as $ from 'jquery';
import * as firebase from 'firebase/app';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../../reducers/index';
import * as actions from './../../store/auth.actions';
import { Observable } from 'rxjs';
import { getError } from '../../store/auth.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error$: Observable<string | null>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    ) 
    
    { }

  ngOnInit() {

    $(".online-span").hide();
    $(".offline-span").hide();

    let connectedRef = firebase.database().ref(".info/connected");
      connectedRef.on("value", function(snap) {
        if (snap.val() === true) {
          $(".online-span").show();
          $(".offline-span").hide();
         // console.log('Online Mode...');
        } else {
          $(".online-span").hide();
          $(".offline-span").show();
         // console.log('Offline Mode...');
        }
      });
  

    this.error$ = this.store
      .pipe(
        select(getError),
        map( (error: any) => {
          if (error && (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password')) {
            return 'Invalid login or password';
          } else {
            return null;
          }
        })
      );
  }



  onGoogleLogin(authProvider: string) {
    this.store.dispatch(new actions.SocialLogin({ authProvider }));
  }

  onFacebookLogin(authProvider: string) {
    this.store.dispatch(new actions.SocialLogin({ authProvider }));
  }

  onTwitterLogin(authProvider: string) {
    this.store.dispatch(new actions.SocialLogin({ authProvider }));
  }

  onGithubLogin(authProvider: string) {
    this.store.dispatch(new actions.SocialLogin({ authProvider }));
  }

}
