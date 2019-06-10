import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-peralatan-sisi-udara-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  curentKategoriPeralatan : string = null;
  colorSelect: Array<any>;
  sizeSelect: Array<any>;

  public itemsList: Object[] = [
    {
    title: 'Description',
    description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson adsquid.'
    },
    {
    title: 'Details',
    description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson adsquid.'
    },
    {
    title: 'Shipping',
    description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson adsquid.'
    }
    ];


  constructor() { }

  ngOnInit() {

    this.colorSelect = [
      { value: 'Black', label: 'Black' },
      { value: 'White', label: 'White' },
      { value: 'Red', label: 'Red' },
      ];
      this.sizeSelect = [
      { value: 'XS', label: 'XS' },
      { value: 'S', label: 'S' },
      { value: 'L', label: 'L' },
      ];
      
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
