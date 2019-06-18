import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { KategoriSisiUdara } from '../models/kategori-sisi-udara.model';

import { Store, select } from '@ngrx/store';


import { AppState } from '../../../../../reducers/index';
import * as fromSisiUdaraLocalAction from './../store/kategori-sisi-udara.actions';
import { getDataKategoriPeralatanSisiUdara, getIsLoading } from '../store/kategori-sisi-udara.selectors';




@Component({
  selector: 'app-su-read',
  templateUrl: './su-read.component.html',
  styleUrls: ['./su-read.component.css']
})


export class SuReadComponent implements OnInit{

  isLoading$: Observable<boolean>;
  peralatan_kategori_sisi_udara$ : Observable <KategoriSisiUdara[] | null>;
 

  constructor( 
    private afAuth: AngularFireAuth, 
    private store: Store<AppState>,) { }


  get user() {
    return this.afAuth.auth.currentUser;
  }

  ngOnInit() {
    this.store.dispatch(new fromSisiUdaraLocalAction.KategoriSisiUdaraQuery());
    this.isLoading$ = this.store.select(getIsLoading);
    this.peralatan_kategori_sisi_udara$ = this.store.pipe(
      select(getDataKategoriPeralatanSisiUdara),
      map( (projects: KategoriSisiUdara[]) => {
        if (this.user && !projects) {
          this.store.dispatch(new fromSisiUdaraLocalAction.KategoriSisiUdaraQuery());
        }
        return projects;
      })
    );
    
   
  }



}
