import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProviderService} from '../shared/services/provider.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // logged: boolean;
  gymClicked: boolean;
  login: boolean;
  registered: boolean;
  username: string;
  password: string;
  password2: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  status: string;
  authlogin: boolean;
  constructor(private router: Router, private provider: ProviderService) {
  }

  ngOnInit() {
    // this.logged = this.provider.logged;
    this.gymClicked = JSON.parse(localStorage.getItem('gymClicked'));
    this.registered = false;
    this.username = '';
    this.password = '';
    this.password2 = '';
    this.name = '';
    this.surname = '';
    this.email = '';
    this.phone = '';
    this.status = '';
    // localStorage.setItem('login', 'false');
    // this.login = JSON.parse(localStorage.getItem('login'));
  }
  x() {
    this.authlogin = false;
    this.registered = false;
  }

  getAbout() {
    this.router.navigate([{outlets: {primary: 'about'}}]);
  }
  toMainPage() {
    this.router.navigate([{outlets: {primary: 'login'}}]);
  }
  log() {
    if (JSON.parse(localStorage.getItem('login')) === true) {
      alert('You already logged');
    } else {
      this.authlogin = true;
    }
  }
}
