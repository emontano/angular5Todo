import { Component, OnInit } from '@angular/core';
import { User} from '../../models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedInUser:User = {name:'Monty', email:'', password:null};
  isLoggedIn: boolean = true;
  
  constructor() { }

  ngOnInit() {
    console.log(this.loggedInUser);
  }

}
