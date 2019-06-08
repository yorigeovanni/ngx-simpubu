import * as $ from 'jquery';
import {MDBSpinningPreloader} from 'ng-uikit-pro-standard';

import { Component, OnInit , AfterViewInit, OnDestroy } from '@angular/core';
import {fromEvent, Observable, Subscription } from 'rxjs';
import * as firebase from 'firebase/app';

import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import * as fromAuth from './auth/store/auth.actions';

import { User } from './auth/models/user.model';
import { getUser, getIsLoggedIn, getIsLoading, getIsAdmin, getIsExist } from './auth/store/auth.selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit, AfterViewInit, OnDestroy {

  title = 'SIMPUBU - DIREKTORAT BANDAR UDARA';
  user$: Observable<User | null>;
  isLoggedIn$: Observable<boolean>;
  isExist$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  isAdmin$: Observable<boolean>;


  //OFFLINE - ONLINE DETECTION
  onlineEvent: Observable<Event>;
  offlineEvent: Observable<Event>;
  subscriptions: Subscription[] = [];
  connectionStatusMessage: string;
  connectionStatus: boolean = true;


  constructor(
    private mdbSpinningPreloader: MDBSpinningPreloader, 
    private store: Store<AppState> ) 
    {}


  ngOnInit() {

    this.user$ = this.store.select(getUser);
    this.isLoggedIn$ = this.store.select(getIsLoggedIn);
    this.isExist$ = this.store.select(getIsExist);
    this.isLoading$ = this.store.select(getIsLoading);
    this.isAdmin$ = this.store.select(getIsAdmin);

    this.onlineEvent = fromEvent(window, 'online');
    this.offlineEvent = fromEvent(window, 'offline');

    this.subscriptions.push(this.onlineEvent.subscribe(e => {
      this.connectionStatusMessage = 'anda terhubung ke jaringan internet';
      this.connectionStatus = true;
      console.log('Online...');
    }));

    this.subscriptions.push(this.offlineEvent.subscribe(e => {
      this.connectionStatusMessage = 'anda tidak terhubung ke jaringan internet';
      this.connectionStatus = false;
      console.log('Offline...');
    }));


    let connectedRef = firebase.database().ref(".info/connected");
      connectedRef.on("value", function(snap) {
        if (snap.val() === true) {
          alert("connected");
        } else {
          alert("not connected");
        }
      });
  }

  ngAfterViewInit() {
    this.mdbSpinningPreloader.stop();
  }

  onLogout(user: User) {
    this.store.dispatch(new fromAuth.LogoutRequested( { user }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
