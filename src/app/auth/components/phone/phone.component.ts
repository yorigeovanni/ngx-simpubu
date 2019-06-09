import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { WindowService } from './../../services/window.service';
import * as firebase from 'firebase/app';
import { User } from './../../models/user.model';

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

  error$: Observable<string | null>;

  constructor(
    private store: Store<AppState>,
    private win: WindowService,
    private router: Router,
    ) 
    
    { }

  ngOnInit() {

    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',{'size': 'invisible'});
    this.windowRef.recaptchaVerifier.render();
    

    this.loginPhoneForm = new FormGroup({
      country: new FormControl('62', [Validators.required, Validators.maxLength(2)]),
      area: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      prefix: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
      line: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(4)]),
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
                  .then( res => {

                      const user : User = {
                          uid: res.user.uid,
                          displayName: res.user.displayName,
                          email: res.user.email,
                          providerId: res.additionalUserInfo.providerId,
                          photoUrl: res.user.photoURL,
                          isNewUser: res.additionalUserInfo.isNewUser
                      };

                      this.store.dispatch(new actions.SaveUser({ user }));
                      this.store.dispatch(new actions.LoginSuccess({ user }));
                      this.router.navigateByUrl('/');
    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }


}
