import { Injectable } from '@angular/core';
import { of } from 'rxjs';


import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { KategoriPeralatan } from '../models/kategori-peralatan.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor( private afAuth: AngularFireAuth, 
               private firestore: AngularFirestore,
    ) { }


    get userId() {
        if (this.afAuth.auth.currentUser) {
          return this.afAuth.auth.currentUser.uid;
        }
      }
    
      create(kategoriPeralatan: KategoriPeralatan, peralatanId : string) {
        const kategoriPeralatanRef: AngularFirestoreDocument<any> = this.firestore.doc('kategori_peralatan/' + peralatanId);
        return kategoriPeralatanRef.set(kategoriPeralatan); // tidak pake merge karena akan hilang semua data
      }
    
      read(peralatanId : string) {
        return this.firestore.collection('kategori_peralatan').snapshotChanges();
      }


    

}
