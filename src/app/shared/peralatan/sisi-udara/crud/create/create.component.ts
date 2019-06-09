import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';


import { Store } from '@ngrx/store';
import * as fromSisiUdara from './../../store/sisi-udara.actions';
import { AppState } from '../../../../../reducers/index';
import { getSisiUdara, getIsLoading } from '../../store/sisi-udara.selectors';
import { SisiUdara } from './../../models/sisi-udara.model';


@Component({
  selector: 'shared-peralatan-sisi-udara-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})


export class CreateComponent implements OnInit, OnDestroy {

  isLoading$: Observable<boolean>;
  sisiUdara: SisiUdara[] | null;
  sisiUdaraSub: Subscription;
  lastsisiUdaraIndex: number;

  constructor(
    private store: Store<AppState>, 
    private afAuth: AngularFireAuth) 
    
    {}

  ngOnInit() {
    this.isLoading$ = this.store.select(getIsLoading);
    this.sisiUdaraSub = this.store.select(getSisiUdara).pipe(
      map( (sisiUdara: SisiUdara[]) => {
        if (this.user && !sisiUdara) {
          this.store.dispatch(new fromSisiUdara.sisiUdaraQuery());
        }
        return sisiUdara;
      })
    )
    .subscribe( (sisiUdara: SisiUdara[]) => {
      if (sisiUdara && sisiUdara.length !== 0) {
        const index: number = Number(sisiUdara[sisiUdara.length - 1].key);
        this.lastsisiUdaraIndex = index;
      } else {
        this.lastsisiUdaraIndex = 0;
      }

      this.sisiUdara = sisiUdara;
    });
  }

  get user() {
    return this.afAuth.auth.currentUser;
  }


  ngOnDestroy() {
    if (this.sisiUdaraSub) {
      this.sisiUdaraSub.unsubscribe();
    }
  }

}
