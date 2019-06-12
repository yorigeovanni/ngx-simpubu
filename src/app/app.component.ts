import * as $ from 'jquery';
import {MDBSpinningPreloader} from 'ng-uikit-pro-standard';
import { MessagingService } from "./notifications/messaging.service";

import { Component, OnInit , AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';


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


export class AppComponent  implements OnInit, AfterViewInit {

  title = 'SIMPUBU - DIREKTORAT BANDAR UDARA';
  user$: Observable<User | null>;
  isLoggedIn$: Observable<boolean>;
  isExist$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  isAdmin$: Observable<boolean>;


  message;
  constructor(
    private mdbSpinningPreloader: MDBSpinningPreloader, 
    private store: Store<AppState>,
    private messagingService: MessagingService, ) 
    {}


  ngOnInit() {

    const userId = 'user001';
    this.messagingService.requestPermission(userId)
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage

    this.user$ = this.store.select(getUser);
    this.isLoggedIn$ = this.store.select(getIsLoggedIn);
    this.isExist$ = this.store.select(getIsExist);
    this.isLoading$ = this.store.select(getIsLoading);
    this.isAdmin$ = this.store.select(getIsAdmin);

    
  }

  ngAfterViewInit() {
    this.mdbSpinningPreloader.stop();
  }

  onLogout(user: User) {
    this.store.dispatch(new fromAuth.LogoutRequested( { user }));
  }



}
