import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProviderService} from '../shared/services/provider.service';
import {ICoach} from '../shared/models/models';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {
  coaches: ICoach[] = [];
  constructor(private router: Router, private provider: ProviderService) { }

  ngOnInit() {
    this.provider.getCoaches(JSON.parse(localStorage.getItem('currentGym'))).then(res => {
      this.coaches = res;
      // this.router.navigateByUrl('coach');
    });
  }
  coachDetail(coach: ICoach) {
    // this.provider.getCoachInfo(JSON.parse(localStorage.getItem('currentGym')), coach).then( res => {
    //   this.coach = res;
    // });
    this.provider.curCoach = coach;
    localStorage.setItem('currentCoach', JSON.stringify(coach));
    this.router.navigate([{outlets: {primary: 'coachinfo', header: 'header3'}}]);
  }
  // getCoaches() {
  //   this.provider.getCoaches(this.provider.curGym).then(res => {
  //     this.coaches = res;
  //     // this.router.navigateByUrl('coach');
  //   });
  // }
}
