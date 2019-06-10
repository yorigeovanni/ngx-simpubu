import * as $ from 'jquery';
import { PeralatanSisiUdara } from '../../../models/peralatan-sisi-udara.model';
import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';


import {AppState} from '../../../../../reducers/index';
import * as ngrxSisiUdaraActions from '../../store/ngrx-sisi-udara.actions';



@Component({
  selector: 'shared-peralatan-sisi-udara-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {

  curentKategoriPeralatan : string = null;

  constructor(private store: Store<AppState>,) { }

  ngOnInit() {
    const peralatan_sisi_udara_baru : PeralatanSisiUdara = {};
    this.store.dispatch(new ngrxSisiUdaraActions.createPeralatanSisiUdaraSuccess());
  }


  setKategoriPeralatan(event){
    if( this.curentKategoriPeralatan === event.target.attributes.id.nodeValue){
      $('#' + this.curentKategoriPeralatan).removeClass('pink-active');
      this.curentKategoriPeralatan = null;
    }
    else{
      this.curentKategoriPeralatan = event.target.attributes.id.nodeValue;
      console.log(this.curentKategoriPeralatan);
      $('li').removeClass('pink-active');
      $("#" + this.curentKategoriPeralatan).addClass('pink-active');
    }
  }

}
