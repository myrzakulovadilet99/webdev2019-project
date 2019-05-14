import { Component, OnInit } from '@angular/core';
import {ICoach} from '../shared/models/models';
import {Router} from '@angular/router';
import {ProviderService} from '../shared/services/provider.service';
import {log} from 'util';

@Component({
  selector: 'app-coachinfo',
  templateUrl: './coachinfo.component.html',
  styleUrls: ['./coachinfo.component.css']
})
export class CoachinfoComponent implements OnInit {
  currentCoach: ICoach;
  activities = [];
  education = [];
  hobbies = [];
  achievements = [];
  constructor(private router: Router, private provider: ProviderService) { }

  ngOnInit() {
    // if (JSON.parse(localStorage.getItem('currentCoach')) === '') {
    //   this.currentCoach = this.provider.curCoach;
    //   console.log('empty localstorage');
    // } else {
    //   this.currentCoach = JSON.parse(localStorage.getItem('currentCoach'));
    // }
    this.currentCoach = JSON.parse(localStorage.getItem('currentCoach'));
    const act = this.currentCoach.activity;
    this.activities = act.split(';');
    const edu = this.currentCoach.education;
    this.education = edu.split(';');
    const hob = this.currentCoach.hobby;
    this.hobbies = hob.split(';');
    const ach = this.currentCoach.achievement;
    this.achievements = ach.split(';');
  }

}
