import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../../reducers';


import { 
  getIsAdmin, 
  getIsAdminSatker, 
  getIsTeknisi, 
  getIsDBU, 
  getIsBTP,
  getIsBKP,
  getIsInspekturPeralatan,
  getIsLoggedIn,
  getIsLoading,
} from './../../auth/store/auth.selectors';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})


export class WelcomeComponent implements OnInit {

  isAdmin$              : Observable<boolean>;
  isAdminSatker$        : Observable<boolean>;
  isTeknisi$            : Observable<boolean>;
  isBKP$                : Observable<boolean>;
  isBTP$                : Observable<boolean>;
  isDBU$                : Observable<boolean>;
  isInspekturPeralatan$ : Observable<boolean>;
  isLoggedIn$           : Observable<boolean>;
  isLoading$            : Observable<boolean>;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.isAdmin$              = this.store.select(getIsAdmin);
    this.isAdminSatker$        = this.store.select(getIsAdminSatker);
    this.isTeknisi$            = this.store.select(getIsTeknisi);
    this.isBKP$                = this.store.select(getIsBKP);
    this.isBTP$                = this.store.select(getIsBTP);
    this.isDBU$                = this.store.select(getIsDBU);
    this.isInspekturPeralatan$ = this.store.select(getIsInspekturPeralatan);
    this.isLoggedIn$           = this.store.select(getIsLoggedIn);
    this.isLoading$            = this.store.select(getIsLoading);
  }

}
