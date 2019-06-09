import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { SisiUdara } from './../models/sisi-udara.model';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';



@Injectable({
  providedIn: 'root'
})
export class SisiUdaraCrudService {

  constructor(
    private afAuth: AngularFireAuth, 
    private firestore : AngularFirestore,
    private db: AngularFireDatabase ) 
    { }


    getAuthState() {
      return this.afAuth.authState;
    }

    
    get userId() {
      if (this.afAuth.auth.currentUser) {
        return this.afAuth.auth.currentUser.uid;
      }
    }

  
    getCurrentUser() {
      return this.afAuth.auth.currentUser;
    }
  
    create(sisi_udara: SisiUdara, userId: string) {
      const peralatan_sisi_udara = this.firestore.collection('sisi_udara').doc(`${userId}`);
      return peralatan_sisi_udara.set(sisi_udara);
    }

    read(userId: string) {
      return  this.firestore.collection('sisi_udara').doc(`${userId}`).snapshotChanges();
    }
  
    update(sisi_udara: SisiUdara, userId: string) {
      return of(this.db.object(`customers/${userId}/` + sisi_udara.key)
        .update({
          id: sisi_udara.key,
          name: sisi_udara.nama_peralatan,
          description: sisi_udara.kategori_peralatan,
        }));
    }
  
    delete(sisi_udara: SisiUdara, userId: string) {
      return this.db.object(`customers/${userId}/` + sisi_udara.key).remove();
    }
  
}
