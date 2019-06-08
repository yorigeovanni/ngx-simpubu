import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { WindowService } from './../../services/window.service';
import * as firebase from 'firebase';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../../reducers/index';
import * as actions from './../../store/auth.actions';
import { Observable } from 'rxjs';
import { getError } from '../../store/auth.selectors';
import { map } from 'rxjs/operators';




@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  loginPhoneForm: FormGroup;
  windowRef: any;
  verificationCode: string;
  user: any;

  error$: Observable<string | null>;

  constructor(
    private store: Store<AppState>,
    private win: WindowService,
    ) 
    
    { }

  ngOnInit() {

    this.windowRef = this.win.windowRef
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',{'size': 'invisible'})
    this.windowRef.recaptchaVerifier.render()

    this.loginPhoneForm = new FormGroup({
      country: new FormControl('+62', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      area: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      prefix: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
      line: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]),
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

  
  get country() { return this.loginPhoneForm.get('country'); }
  get area() { return this.loginPhoneForm.get('area'); }
  get prefix() { return this.loginPhoneForm.get('prefix'); }
  get line() { return this.loginPhoneForm.get('line'); }


  formatPhoneNumber_e164() {
    const country : string = this.loginPhoneForm.value.country;
    const area : string = this.loginPhoneForm.value.area;
    const prefix : string = this.loginPhoneForm.value.prefix;
    const line : string = this.loginPhoneForm.value.line;
    const num = country + area + prefix + line
    return `+${num}`
  }





  onPhoneLogin() {
    if (this.loginPhoneForm.valid) {

        const appVerifier = this.windowRef.recaptchaVerifier;
        const num = this.formatPhoneNumber_e164();
        firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {
                this.windowRef.confirmationResult = result;
            }).catch( error => console.log(error) );
    }
  }


  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {
                    this.user = result.user;
    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }


}
