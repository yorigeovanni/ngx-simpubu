import * as $ from 'jquery';
import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-sisi-udara',
  templateUrl: './sisi-udara.component.html',
  styleUrls: ['./sisi-udara.component.css']
})
export class SisiUdaraComponent implements OnInit, AfterViewInit {

  currentActiveSection = null;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    window.setTimeout(() =>{
      $( "#rekap-peralatan-sisi-udara" ).trigger( "click" );
    });
    
  }


  filterContent(event){
    $('.buttonFilterContent').removeClass('btn-pink');
    $("#" + event.target.attributes.id.nodeValue).addClass('btn-pink');
    this.currentActiveSection = event.target.attributes.id.nodeValue;
    console.log(this.currentActiveSection);
  }

}
