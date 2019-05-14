import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProviderService} from '../shared/services/provider.service';
import {IClient, IGym} from '../shared/models/models';

@Component({
  selector: 'app-header3',
  templateUrl: './header3.component.html',
  styleUrls: ['./header3.component.css']
})
export class Header3Component implements OnInit {
  // logged: boolean;
  ok = false;
  gymClicked: boolean;
  login: boolean;
  registered: boolean;
  asAdmin: boolean;
  asClient: boolean;
  username: string;
  password: string;
  password2: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  status: string;
  authlogin: boolean;
  selectedGym: IGym;
  clients: IClient[] = [];
  gymId: number;
  gyms: IGym[] = [];
  client: IClient;
  constructor(private router: Router, private provider: ProviderService) { }

  ngOnInit() {
    // this.logged = this.provider.logged;
    this.provider.getGyms().then( res => {
      this.gyms = res;
      console.log(this.gyms);
    });
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
  }

  toMainPage() {
    this.router.navigate([{outlets: {primary: 'login', header: 'header'}}]);
  }
  x() {
    this.authlogin = false;
    this.registered = false;
  }
  getFeedback() {
    this.router.navigate([{outlets: {primary: 'feedback'}}]);
  }

  club() {
    localStorage.setItem('gymClicked', 'false');
    localStorage.removeItem('currentGym');
    this.router.navigate([{outlets: {primary: 'main', header: 'header2'}}]);
  }

  trener() {
    this.router.navigate([{outlets: {primary: 'coach'}}]);
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
  logout() {
    if (localStorage.getItem('login')) {
      if (localStorage.getItem('token')) {
        this.provider.logout().then( res => {
          this.provider.logged = false;
        });
      } else {
        localStorage.setItem('login', 'false');
        localStorage.removeItem('client');
      }
      this.authlogin = false;
      this.router.navigate([{outlets: {primary: 'login', header: 'header'}}]);
    } else {
      alert(`You haven't logged in`);
    }
  }
  auth() {
    if (this.asClient === true) {
      if (this.asAdmin === true) {
        alert('Choose only one type of user!!!');
      } else {
        console.log('Client');
        if (this.username !== '' && this.password !== '') {
          this.provider.getClients(JSON.parse(localStorage.getItem('currentGym')).id).then( res => {
            this.clients = res;
            console.log(this.clients);
          });
          for (const c of this.clients) {
            if (this.username === c.username && this.password === c.password) {
              localStorage.setItem('login', 'true');
              console.log('Client logged');
              console.log(c.username);
              this.router.navigate([{outlets: {primary: 'gym' , header: 'header3'}}]);
              this.authlogin = false;
              this.ok = true;
              this.client = c;
              break;
            }
          }
          if (!this.ok) {
            alert('Invalid login or password');
          } else {
            localStorage.setItem('client', JSON.stringify(this.client));
          }
        } else {
          alert('Заполните все поля!');
        }
      }
    } else {
      if (this.asAdmin) {
        console.log('Admin');
        if (this.username !== '' && this.password !== '') {
          this.provider.auth(this.username, this.password).then(res => {
            localStorage.setItem('token', res.token);
            console.log(localStorage.getItem('token'));
          });
          localStorage.setItem('login', 'true');
          this.login = JSON.parse(localStorage.getItem('login'));
          console.log('OK');
          this.router.navigate([{outlets: {primary: 'gym' , header: 'header3'}}]);
          this.authlogin = false;
        } else {
          alert('Заполните все поля!');
        }
      } else {
        alert(`Please, choose type of user!`);
      }
    }
  }
  reg() {
    this.registered = true;
  }
  register() {
    if (this.username !== '' && this.password !== '' && this.name !== '' && this.surname !== '') {
      if (this.password2 !== '' && this.email !== '' && this.phone !== '' && this.status !== '') {
        if (this.password === this.password2) {
          console.log('registered  ' + this.password + this.password2);
          this.gymId = JSON.parse(localStorage.getItem('currentGym')).id;
          console.log(this.gymId);
          this.provider.createClient(this.gymId, this.name, this.surname, this.username,
            this.password, this.email, this.phone, this.status).then( res => {
            console.log('Client created');
            localStorage.setItem('login', 'true');
            this.login = JSON.parse(localStorage.getItem('login'));
            console.log('OK');
            this.authlogin = false;
          });
        } else {
          alert('You write two different password');
        }
      } else {
        alert('Заполните все поля!');
      }
    } else {
      alert('Заполните все поля!');
    }
  }
}
