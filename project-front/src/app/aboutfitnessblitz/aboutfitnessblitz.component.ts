import { Component, OnInit } from '@angular/core';
import {IAbout} from '../shared/models/models';
import {Router} from '@angular/router';
import {ProviderService} from '../shared/services/provider.service';

@Component({
  selector: 'app-aboutfitnessblitz',
  templateUrl: './aboutfitnessblitz.component.html',
  styleUrls: ['./aboutfitnessblitz.component.css']
})
export class AboutfitnessblitzComponent implements OnInit {
  public aboutInfo: IAbout[] = [];
  constructor(private router: Router, private provider: ProviderService) { }

  ngOnInit() {
    this.provider.getAbout().then( res => {
      this.aboutInfo = res;
      // this.router.navigateByUrl('about');
    });
  }
  // getAbout() {
  //   this.provider.getAbout().then( res => {
  //     this.aboutInfo = res;
  //     this.router.navigateByUrl('about');
  //   });
  // }
}
