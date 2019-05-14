import {Component, OnInit, Provider} from '@angular/core';
import {Router} from '@angular/router';
import {ProviderService} from '../shared/services/provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // username: string;
  // password: string;
  constructor(private router: Router, private provider: ProviderService) {}
  ngOnInit() {
    localStorage.clear();
    localStorage.setItem('gymClicked', 'false');
  }
  detail() {
    this.router.navigate([{outlets: {primary: 'main', header: 'header2'}}]);
  }
  // auth() {
  //   if (this.username !== '' && this.password !== '') {
  //     this.provider.auth(this.username, this.password).then( res => {
  //       localStorage.setItem('token', res.token);
  //       console.log(localStorage.getItem('token'));
  //     });
  //     console.log('OK');
  //     this.router.navigateByUrl('main');
  //   } else {
  //     alert('Заполните все поля!');
  //   }
  // }
}
