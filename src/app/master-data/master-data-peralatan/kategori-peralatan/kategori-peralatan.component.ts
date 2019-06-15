import * as $ from 'jquery';
import { KategoriPeralatan } from './models/kategori-peralatan.model';
import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../reducers/index';
import * as kategoriPeralatanActions from './store/kategori-peralatan.actions';

@Component({
  selector: 'app-kategori-peralatan',
  templateUrl: './kategori-peralatan.component.html',
  styleUrls: ['./kategori-peralatan.component.scss']
})


export class KategoriPeralatanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setActive(event){
    console.log(event);
  }


  

}
