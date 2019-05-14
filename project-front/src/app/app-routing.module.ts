import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {GymComponent} from './gym/gym.component';
import {AboutfitnessblitzComponent} from './aboutfitnessblitz/aboutfitnessblitz.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {CoachComponent} from './coach/coach.component';
import {Header2Component} from './header2/header2.component';
import {HeaderComponent} from './header/header.component';
import {Header3Component} from './header3/header3.component';
import {CoachinfoComponent} from './coachinfo/coachinfo.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'header3',
    component: Header3Component,
    outlet: 'header'
  },
  {
    path: 'header2',
    component: Header2Component,
    outlet: 'header'
  },
  {
    path: 'header',
    component: HeaderComponent,
    outlet: 'header'
  },
  {
    path: 'gym',
    component: GymComponent
  },
  {
    path: 'about',
    component: AboutfitnessblitzComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'coach',
    component: CoachComponent
  },
  {
    path: 'coachinfo',
    component: CoachinfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
