import * as $ from 'jquery';
import { Component, OnInit, AfterViewInit } from '@angular/core';
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
  selector: 'app-all-peralatan',
  templateUrl: './all-peralatan.component.html',
  styleUrls: ['./all-peralatan.component.scss'],
})


export class AllPeralatanComponent implements OnInit, AfterViewInit {

 
  isAdmin$              : Observable<boolean>;
  isAdminSatker$        : Observable<boolean>;
  isTeknisi$            : Observable<boolean>;
  isBKP$                : Observable<boolean>;
  isBTP$                : Observable<boolean>;
  isDBU$                : Observable<boolean>;
  isInspekturPeralatan$ : Observable<boolean>;
  isLoggedIn$           : Observable<boolean>;
  isLoading$            : Observable<boolean>;

  currentActiveSection = null;


  constructor( private store: Store<AppState>, ) { }

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

  ngAfterViewInit() {
    window.setTimeout(() =>{
      $( "#umum" ).trigger( "click" );
    });
  }


  filterContent(event){
    $('.buttonFilterContent').removeClass('btn-primary');
    $("#" + event.target.attributes.id.nodeValue).addClass('btn-primary');
    this.currentActiveSection = event.target.attributes.id.nodeValue;
  }

}
