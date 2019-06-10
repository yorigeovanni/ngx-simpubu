import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-peralatan-sisi-udara-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  curentKategoriPeralatan : string = null;
  constructor() { }

  ngOnInit() {

   
      
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
