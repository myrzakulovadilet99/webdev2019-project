import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';
import {IGym, ICoach, IClient, IFeedback, ISubscription, ITest, IAbout} from '../shared/models/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  public logged = false;
  public gymClicked = false;
  public fitnessClicked = false;
  public feedbackClicked = false;
  public username = '';
  public password = '';
  public name: any = '';
  public gyms: IGym[] = [];
  public coaches: ICoach[] = [];
  public clients: IClient[] = [];
  public tests: ITest[] = [];
  public subscription: ISubscription[] = [];
  public feedbacks: IFeedback[] = [];
  public curGym: IGym;
  public aboutInfo: IAbout[] = [];
  constructor(private provider: ProviderService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
    if (this.logged === true && this.gymClicked === false) {
      this.provider.getGyms().then(res => {
        this.gyms = res;
      });
    }
    if (this.logged === true && this.gymClicked === true) {
      this.provider.getCoaches(this.curGym).then(res => {
        this.coaches = res;
        console.log(this.coaches);
      });
    }
  }
  getCoaches(gym: IGym) {
    this.provider.getCoaches(gym).then(res => {
      this.coaches = res;
      this.gymClicked = true;
      this.curGym = gym;
    });
  }
  auth() {
    if (this.username !== '' && this.password !== '') {
      this.provider.auth(this.username, this.password).then( res => {
        localStorage.setItem('token', res.token);
        this.provider.getGyms().then(r => {
          this.gyms = r;
        });
        console.log('OK');
        this.logged = true;
      });
    }
  }
  logout() {
    this.provider.logout().then( res => {
      localStorage.clear();
      this.logged = false;
      this.gymClicked = false;
    });
  }

  getAbout() {
    this.provider.getAbout().then( res => {
      this.aboutInfo = res;
      this.fitnessClicked = true;
    });
  }
  getFeedback() {
    this.provider.getFeedback(this.curGym).then( res => {
      this.feedbacks = res;
      this.feedbackClicked = true;
    });
  }

}
