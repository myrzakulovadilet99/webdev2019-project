import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';
import {IGym, ICoach, IClient, IFeedback, ISubscription, ITest, IAbout} from '../shared/models/models';
import {Router} from '@angular/router';
import {range} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  gyms: IGym[] = [];
  constructor(private router: Router, private provider: ProviderService) { }
  ngOnInit() {
    // const token = localStorage.getItem('token');
      // localStorage.clear();
      // if (token) {
      //   this.provider.logged = true;
      // }
      // if (this.provider.logged === true) {
    localStorage.removeItem('token');
    localStorage.removeItem('client');
    this.provider.getGyms().then(res => {
      this.gyms = res;
    });
      // }
  }
  getGymInfo(gym: IGym) {
    this.provider.curGym = gym;
    const sItem = JSON.stringify(gym);
    localStorage.setItem('currentGym', sItem);
    // this.provider.gymClicked = true;
    localStorage.setItem('gymClicked', 'true');
    console.log(localStorage.getItem('currentGym'));
    this.router.navigate([{outlets: {primary: 'gym' , header: 'header3'}}]);
  }
  // getFeedback() {
  //   this.provider.getFeedback(this.curGym).then( res => {
  //     this.feedbacks = res;
  //     this.feedbackClicked = true;
  //   });
  // }

}
