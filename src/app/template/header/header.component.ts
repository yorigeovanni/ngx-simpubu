import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from './../../auth/models/user.model';

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
   // console.log(this.user);
    
    console.log(this.isAdmin);
    console.log(this.isLoggedIn);
    console.log(this.isLoading);
  }

  onLogout() {
    this.logout.emit(this.user);
  }

}
