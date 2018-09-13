import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login() {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).
      then(userData => resolve(userData), err => reject(err) );
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

}
