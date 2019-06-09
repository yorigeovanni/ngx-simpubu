import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { User } from '../models/user.model';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({ providedIn: 'root' })


export class AuthService {
  constructor( private afAuth: AngularFireAuth, 
               private firestore: AngularFirestore, 
              ) 
  { }


  socialLogin(authProvider: string) {
    let provider: any;

    if (authProvider === 'phone') {
      console.log('login with phone');
      provider = new firebase.auth.RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': function(response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          //onSignInSubmit();
          console.log('login phone');
        }
      });
    }

    if (authProvider === 'google') {
      provider = new firebase.auth.GoogleAuthProvider();
    }

    if (authProvider === 'facebook') {
      provider = new firebase.auth.FacebookAuthProvider();
    }

    if (authProvider === 'twitter') {
      provider = new firebase.auth.TwitterAuthProvider();
    }
    return from(this.afAuth.auth.signInWithPopup(provider));
  }


  saveUser(user: User) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc('users/' + user.uid);
    user.isOnline = true;
    // set user to NOT new user (supaya tidak overwrite data diatas)
    user.isNewUser = false;
    return userRef.set(user); // tidak pake merge karena akan hilang semua data
  }


  checkUserRole(uid: string) {
    return this.firestore.collection('list_admins').doc(uid).valueChanges();
  }

  checkIsAdminSatker(uid: string) {
    console.log(uid);
    return this.firestore.collection('list_admin_satker').doc(uid).valueChanges();
  }

  checkIsBKP(uid: string) {
    return this.firestore.collection('list_BKP').doc(uid).valueChanges();
  }

  checkIsBTP(uid: string) {
    return this.firestore.collection('list_BTP').doc(uid).valueChanges();
  }

  checkIsDBU(uid: string) {
    return this.firestore.collection('list_DBU').doc(uid).valueChanges();
  }

  checkIsInspekturPeralatan(uid: string) {
    return this.firestore.collection('list_inspektur_peralatan').doc(uid).valueChanges();
  }

  checkIsInspekturPersonil(uid: string) {
    return this.firestore.collection('list_inspektur_personil').doc(uid).valueChanges();
  }

  checkIsInspekturSatker(uid: string) {
    return this.firestore.collection('list_inspektur_satker').doc(uid).valueChanges();
  }


  checkIsTeknisi(uid: string) {
    return this.firestore.collection('list_teknisi').doc(uid).valueChanges();
  }

  updateOnlineStatus(uid: string, status: boolean) {
    return from(this.firestore.collection("users").doc(uid).update({ isOnline: status }));
  }

  logout(uid: string) {
    this.updateOnlineStatus(uid, false);
    return from(this.afAuth.auth.signOut());
  }


  getCurrentUser() {
    return this.afAuth.auth.currentUser;
  }


  updateProfile(displayName: string, photoUrl: string) {
    const userProfile = this.afAuth.auth.currentUser;
    if (userProfile) {
      return <any>from(userProfile.updateProfile( { displayName: displayName, photoURL: photoUrl }));
    }
  }


  getAuthState() {
    return this.afAuth.authState;
  }

  
}
