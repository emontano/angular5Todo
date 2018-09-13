import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MessagesService } from '../../services/messages.service';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private mgsService: MessagesService,
              public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/']);
      }
    });
  }

  login() {
    this.authService.login().then(res => {
    this.mgsService.displayMessageRedirect('You are now logged in', 'alert-success', '/');
    }).catch(err => {
      console.log(err.message);
      this.mgsService.displayMessageRedirect(err.message, 'alert-danger', 'login');
    });
  }


}
