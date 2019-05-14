import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProviderService} from '../shared/services/provider.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
  gymClicked: boolean;
  login: boolean;
  username: string;
  password: string;
  authlogin: boolean;

  constructor(private router: Router, private provider: ProviderService) { }

  ngOnInit() {
    this.gymClicked = JSON.parse(localStorage.getItem('gymClicked'));
  }
  getAbout() {
    this.router.navigate([{outlets: {primary: 'about'}}]);
  }
  auth() {
    if (this.username !== '' && this.password !== '') {
      this.provider.auth(this.username, this.password).then(res => {
        localStorage.setItem('token', res.token);
        console.log(localStorage.getItem('token'));
      });
      localStorage.setItem('login', 'true');
      this.login = JSON.parse(localStorage.getItem('login'));
      console.log('OK');
      this.router.navigateByUrl('main');
      this.authlogin = false;
    } else {
      alert('Заполните все поля!');
    }
  }

  log() {
    if (JSON.parse(localStorage.getItem('login')) === true) {
      alert('You have already logged in');
    } else {
      this.authlogin = true;
      //   localStorage.setItem('login', 'true');
      //   this.login = JSON.parse(localStorage.getItem('login'));
    }
  }
  toMainPage() {
    this.router.navigate([{outlets: {primary: 'login'}}]);
  }
}
