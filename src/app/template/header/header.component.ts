import { Component, OnInit, Input, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { User } from './../../auth/models/user.model';

import * as $ from 'jquery';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit {

  @Input() user: User;
  @Input() isLoggedIn: boolean;
  @Input() isLoading: boolean;
  @Input() isAdmin: boolean;


  @Output() logout = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    $(".online-span").hide();
    $(".offline-span").hide();

    let connectedRef = firebase.database().ref(".info/connected");
      connectedRef.on("value", function(snap) {
        if (snap.val() === true) {
          $(".online-span").show();
          $(".offline-span").hide();
         // console.log('Online Mode...');
        } else {
          $(".online-span").hide();
          $(".offline-span").show();
         // console.log('Offline Mode...');
        }
      });
  }

  onLogout() {
    this.logout.emit(this.user);
  }

}
