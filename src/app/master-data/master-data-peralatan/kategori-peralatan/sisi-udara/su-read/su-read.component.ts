import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { KategoriSisiUdara } from '../models/kategori-sisi-udara.model';

import { Store } from '@ngrx/store';


import { AppState } from '../../../../../reducers/index';
import * as fromSisiUdaraLocalAction from './../store/kategori-sisi-udara.actions';
import { getDataKategoriPeralatanSisiUdara, getIsLoading } from '../store/kategori-sisi-udara.selectors';




@Component({
  selector: 'app-su-read',
  templateUrl: './su-read.component.html',
  styleUrls: ['./su-read.component.css']
})


export class SuReadComponent implements OnInit, OnDestroy{

  isLoading$: Observable<boolean>;
  peralatan_kategori_sisi_udara : KategoriSisiUdara[] | null;
  kategoriSisiUdaraSub: Subscription;
  lastKategoriPeralatanSisiUdaraIndex: number;

  constructor( 
    private afAuth: AngularFireAuth, 
    private store: Store<AppState>,) { }


  get user() {
    return this.afAuth.auth.currentUser;
  }

  ngOnInit() {
    this.isLoading$ = this.store.select(getIsLoading);
    this.kategoriSisiUdaraSub = this.store.select(getDataKategoriPeralatanSisiUdara).pipe(
      map( (peralatan_kategori_sisi_udara: KategoriSisiUdara[]) => {
        if (this.user && !peralatan_kategori_sisi_udara) {
          this.store.dispatch(new fromSisiUdaraLocalAction.KategoriSisiUdaraQuery());
        }
        return peralatan_kategori_sisi_udara;
      })
    )
    .subscribe( (peralatan_kategori_sisi_udara: KategoriSisiUdara[]) => {
      if (peralatan_kategori_sisi_udara && peralatan_kategori_sisi_udara.length !== 0) {
        const index: number = Number(peralatan_kategori_sisi_udara[peralatan_kategori_sisi_udara.length - 1].id);
        this.lastKategoriPeralatanSisiUdaraIndex = index;
      } else {
        this.lastKategoriPeralatanSisiUdaraIndex = 0;
      }

      this.peralatan_kategori_sisi_udara = peralatan_kategori_sisi_udara;
    });
   
  }


  ngOnDestroy() {
    if (this.kategoriSisiUdaraSub) {
      this.kategoriSisiUdaraSub.unsubscribe();
    }
  }

}
