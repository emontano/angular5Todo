import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MessagesService } from '../../services/messages.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedInUser: firebase.User; // Observable<firebase.User>;
  isLoggedIn: Boolean = false;

  constructor(private authService: AuthService,
              private mgsService: MessagesService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(firebaseUser => {
      if (firebaseUser) {
        console.log('NavbarComponent:ngOnInit:firebaseUser: ' + firebaseUser);
        this.loggedInUser = firebaseUser;
        this.isLoggedIn = true;
        } else {
        this.isLoggedIn = false;
      }
    });
    console.log('NavbarComponent:ngOnInit:user: ' + this.loggedInUser);
  }

  onLogout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.mgsService.displayMessageRedirect('You are now logged out', 'alert-success', '/login');
  }

}
