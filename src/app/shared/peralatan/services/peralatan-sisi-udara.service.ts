import { PeralatanSisiUdara } from './../models/peralatan-sisi-udara.model';
import { Injectable } from '@angular/core';
import { of, from } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';



@Injectable({
  providedIn: 'root'
})

export class PeralatanSisiUdaraService {

  constructor(
    private afAuth: AngularFireAuth, 
    private firestore : AngularFirestore,
    private db: AngularFireDatabase ) 
    { }


    getAuthState() {
      return this.afAuth.authState;
    }

    
  
    getCurrentUser() {
      return this.afAuth.auth.currentUser;
    }
  
    create(sisi_udara: PeralatanSisiUdara, userId: string) {
      const peralatan_sisi_udara = this.firestore.collection('sisi_udara').doc(`${userId}`);
      return peralatan_sisi_udara.set(sisi_udara);
    }

    read(userId: string) {
      return  this.firestore.collection('sisi_udara').doc(`${userId}`).snapshotChanges();
    }
  
    update(sisi_udara: PeralatanSisiUdara, userId: string) {
      return of(this.db.object(`customers/${userId}/` + sisi_udara.key)
        .update({
          id: sisi_udara.key,
          name: sisi_udara.name,
          description: sisi_udara.lokasi,
        }));
    }
  
    delete(sisi_udara: PeralatanSisiUdara, userId: string) {
      return this.db.object(`customers/${userId}/` + sisi_udara.key).remove();
    }
  
}
