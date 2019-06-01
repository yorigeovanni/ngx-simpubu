import * as $ from 'jquery';
import {MDBSpinningPreloader} from 'ng-uikit-pro-standard';

import { Component, OnInit , AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import * as fromAuth from './auth/store/auth.actions';

import { User } from './auth/models/user.model';
import { getUser, getIsLoggedIn, getIsLoading, getIsAdmin } from './auth/store/auth.selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit, AfterViewInit {
  title = 'SIMPUBU - DIREKTORAT BANDAR UDARA';

  user$: Observable<User | null>;
  isLoggedIn$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  isAdmin$: Observable<boolean>;

  constructor(private mdbSpinningPreloader: MDBSpinningPreloader, private store: Store<AppState>) {}

  ngOnInit() {
    this.user$ = this.store.select(getUser);
    this.isLoggedIn$ = this.store.select(getIsLoggedIn);
    this.isLoading$ = this.store.select(getIsLoading);
    this.isAdmin$ = this.store.select(getIsAdmin);
    console.log(this.user$);
  }

  ngAfterViewInit() {
    this.mdbSpinningPreloader.stop();
  }


  onLogout(user: User) {
    this.store.dispatch(new fromAuth.LogoutRequested( { user }));
  }
}
