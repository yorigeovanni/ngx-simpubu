import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from './../../auth/models/user.model';

import * as $ from 'jquery';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent implements OnInit {

  @Input() user: User;
  @Input() isLoggedIn: boolean;
  @Input() isLoading: boolean;
  @Input() isAdmin: boolean;


  @Output() logout = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
    console.log(this.isAdmin);
    console.log(this.isLoggedIn);
    console.log(this.isLoading);

    let connectedRef = firebase.database().ref(".info/connected");
      connectedRef.on("value", function(snap) {
        if (snap.val() === true) {
          console.log($(''));
          console.log('Online Mode...');
        } else {
          console.log('Offline Mode...');
        }
      });
  }

  onLogout() {
    this.logout.emit(this.user);
  }

}
