import { Component, HostListener,ViewChild, Renderer2, AfterViewInit, ElementRef, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NavbarComponent } from 'ng-uikit-pro-standard';
import { User } from './../../auth/models/user.model';

import * as $ from 'jquery';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('nav') nav: NavbarComponent;

  @Input() user: User;
  @Input() isLoggedIn: boolean;
  @Input() isLoading: boolean;
  @Input() isAdmin: boolean;


  @Output() logout = new EventEmitter<User>();

  constructor(
    private renderer: Renderer2, 
    private el: ElementRef)
     { }

  


  @HostListener('click', ['$event'])
  onClick(event) {
    const toggler = this.el.nativeElement.querySelector('.navbar-toggler');
    const togglerIcon = this.el.nativeElement.querySelector('.navbar-toggler-icon');
      if (event.target === toggler || event.target === togglerIcon) {
      console.log('test');
      setTimeout(() => {
      this.transformDropdowns();
      }, 351);
    }
  }

  @HostListener('document:scroll', ['$event'])
      onScroll() {
      this.transformDropdowns();
      //console.log('scroll');
  }

  @HostListener('window:resize', ['$event'])
      onResize() {
      this.transformDropdowns();
  }

  
  ngAfterViewInit() {
  this.transformDropdowns();
  }

  transformDropdowns() {
    const dropdownMenu = Array.from(this.el.nativeElement.querySelectorAll('.dropdown-menu'));
    const navHeight = this.nav.navbar.nativeElement.clientHeight + 'px';
      
    dropdownMenu.forEach((dropdown) => {
      this.renderer.setStyle(dropdown, 'transform', `translateY(${navHeight})`);
    });
  }



  ngOnInit() {
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
