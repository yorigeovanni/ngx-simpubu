import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { User } from '../models/user.model';


import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({ providedIn: 'root' })


export class AuthService {

  constructor( private afAuth: AngularFireAuth, 
               private db: AngularFireDatabase,
               private firestore: AngularFirestore, ) 
  { }


  // FUNCTION REGISTRASI
  register(email: string, password: string) {
    return from(this.afAuth.auth.createUserWithEmailAndPassword(email, password));
  }

  //FUNCTION LOGIN DENGAN FORM
  login(email: string, password: string) {
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, password));
  }


  // LOGIN DENGAN VENDOR SOSIAL MEDIA
  socialLogin(authProvider: string) {
    let provider: any;
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

  //CHECK JIKA USER ADALAH ADMIN
  checkUserRole(uid: string) {
    return this.db.object('admins/' + uid).valueChanges();
  }


  // FUNCTION LOGOUT
  logout(uid: string) {
    this.updateOnlineStatus(uid, false);
    return from(this.afAuth.auth.signOut());
  }


  //UPDATE PROFILE
  updateProfile(displayName: string, photoUrl: string) {
    const userProfile = this.afAuth.auth.currentUser;
    if (userProfile) {
      return <any>from(userProfile.updateProfile( { displayName: displayName, photoURL: photoUrl }));
    }
  }




  saveUser(user: User) {
    const users = this.db.object('users/' + user.uid);
    return users.set(user);
  }


  updateOnlineStatus(uid: string, status: boolean) {
    if (status) {
      this.db.database.ref().child('users/' + uid).onDisconnect().update( { isOnline: false });
    }
    return from(this.db.object('users/' + uid).update({ isOnline: status }));
  }

  

  getAuthState() {
    return this.afAuth.authState;
  }

  getCurrentUser() {
    return this.afAuth.auth.currentUser;
  }
}
