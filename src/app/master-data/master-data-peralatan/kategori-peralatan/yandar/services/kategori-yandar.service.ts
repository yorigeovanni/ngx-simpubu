import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { KategoriYandar } from '../models/kategori-yandar.model';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })


export class KategoriYandarService {
    constructor( private afAuth: AngularFireAuth, 
                 private firestore: AngularFirestore,) 
    { }
  
    create(){}
  
    read(){}

    update(){}

    delete(){}
  
    
  }
  
