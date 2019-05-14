import {Component, Input, OnInit, Output} from '@angular/core';
import {IGym} from '../shared/models/models';
import {Router} from '@angular/router';
import {ProviderService} from '../shared/services/provider.service';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.css']
})
export class GymComponent implements OnInit {
   // curGym = this.provider.curGym;
  public curGym: IGym;
  constructor(private router: Router, private provider: ProviderService) {}
  ngOnInit() {
    const obj = JSON.parse(localStorage.getItem('currentGym'));
    this.provider.curGym = obj;
    this.curGym = obj;
    // this.provider.getCoaches(JSON.parse(localStorage.getItem('currentGym'))).then(res => {
    //   localStorage.setItem('coaches', JSON.stringify(res));
    // });
  }
}
