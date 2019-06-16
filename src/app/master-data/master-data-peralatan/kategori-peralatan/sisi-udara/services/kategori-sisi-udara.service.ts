import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { KategoriSisiUdara } from '../models/kategori-sisi-udara.model';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })


export class KategoriSisiUdaraService {
    constructor( private afAuth: AngularFireAuth, 
                 private firestore: AngularFirestore,) 
    { }
  
    create(){}
  
    read(){}

    update(){}

    delete(){}
  
    
  }
  
