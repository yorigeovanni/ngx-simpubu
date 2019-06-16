import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';


import { Store } from '@ngrx/store';
import { AppState } from '../../../../../reducers/index';

import { KategoriSisiUdara } from '../models/kategori-sisi-udara.model';


@Component({
  selector: 'app-su-read',
  templateUrl: './su-read.component.html',
  styleUrls: ['./su-read.component.css']
})


export class SuReadComponent implements OnInit, OnDestroy{

  isLoading$: Observable<boolean>;
  peralatan_kategori_sisi_udara : KategoriSisiUdara[] | null;
  kategoriSisiUdaraSub: Subscription;

  constructor( 
    private afAuth: AngularFireAuth, 
    private store: Store<AppState>,) { }

    
  get user() {
    return this.afAuth.auth.currentUser;
  }

  ngOnInit() {
   
  }


  ngOnDestroy() {
    if (this.kategoriSisiUdaraSub) {
      this.kategoriSisiUdaraSub.unsubscribe();
    }
  }

}
