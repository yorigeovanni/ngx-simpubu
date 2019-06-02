// 01. INSERT KEBUTUHAN CORE MODULE
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { User } from '../models/user.model';

// 02. INSERT KEBUTUHAN FIREBASE MODULE
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
//import { AngularFirestore } from '@angular/fire/firestore';

// 03. DEFINISI RUANG EKSEKUSI DI APP
@Injectable({ providedIn: 'root' })


// 04. MULAI EKSPORT SERVICE KE APP
export class AuthService {
  constructor( private afAuth: AngularFireAuth, 
               private db: AngularFireDatabase,
              // private firestore: AngularFirestore, 
              ) 
  { }


  // FUNCTION REGISTRASI
  register(email: string, password: string) {
    return from(this.afAuth.auth.createUserWithEmailAndPassword(email, password));
  }


  // SIMPAN USER
  saveUser(user: User) {
    const users = this.db.object('users/' + user.uid);
    return users.set(user);
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

  
  // FUNCTION UPDATE ONLINE STATUS - DIGUNAKAN PADA SAAT LOGIN DAN LOGOUT
  updateOnlineStatus(uid: string, status: boolean) {
    if (status) {
      this.db.database.ref().child('users/' + uid).onDisconnect().update( { isOnline: false });
    }
    return from(this.db.object('users/' + uid).update({ isOnline: status }));
  }


  // FUNCTION LOGOUT
  logout(uid: string) {
    this.updateOnlineStatus(uid, false);
    return from(this.afAuth.auth.signOut());
  }


  // GET CURRENT USER (DIGUNAKAN PADA UPDATE PROFILE DIBAWAH)
  getCurrentUser() {
    return this.afAuth.auth.currentUser;
  }


  //UPDATE PROFILE
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
