import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { KategoriSisiDarat } from '../models/kategori-sisi-darat.model';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })


export class KategoriSisiDaratService {
    constructor( private afAuth: AngularFireAuth, 
                 private firestore: AngularFirestore,) 
    { }

    create(){}
  
    read(){}

    update(){}

    delete(){}

  }
  
