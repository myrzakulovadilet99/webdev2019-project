import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MainService} from './main.service';
import {IAuthResponse, IGym, ICoach, IClient, IFeedback, ISubscription, ITest, IAbout} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {
  public logged = false;
  public gymClicked = false;
  public curGym: IGym;
  public gymId: number;
  public curCoach: ICoach;
  constructor(http: HttpClient) {
    super(http);
  }
  getGyms(): Promise<IGym[]> {
    return this.get('http://localhost:8000/api/gym_lists/', {});
  }
  getCoaches(gym: IGym): Promise<ICoach[]> {
    return this.get(`http://localhost:8000/api/gym_lists/${gym.id}/coach_list/`, {});
  }
  auth(uname: string, pword: string): Promise<IAuthResponse> {
    return this.post('http://localhost:8000/api/login/', {
      username: uname,
      password: pword
    });
  }
  logout(): Promise<any> {
    return this.post(`http://localhost:8000/api/logout/`, {});
    this.logged = false;
  }
  getAbout(): Promise<IAbout[]> {
    return this.get('http://localhost:8000/api/about/', {});
  }
  getClients(gid: number): Promise<IClient[]> {
    return this.get(`http://localhost:8000/api/gym_lists/${gid}/client_list/`, {});
  }
  getClient(clientId: number): Promise<IClient> {
    this.gymId = JSON.parse(localStorage.getItem('currentGym')).id;
    console.log(this.gymId);
    return this.get(`http://localhost:8000/api/gym_lists/${this.gymId}/client_list/${clientId}/`, {});
  }
  getFeedback(gym: IGym): Promise<IFeedback[]> {
    return this.get(`http://localhost:8000/api/gym_lists/${gym.id}/feedback/`, {});
  }
  sendFeedback(commentt: string): Promise<any> {
    return this.post(`http://localhost:8000/api/gym_lists/${JSON.parse(localStorage.getItem('currentGym')).id}/feedback/`, {
      client_id: JSON.parse(localStorage.getItem('client')).id,
      date: '2019-04-26T13:20:52Z',
      comment: commentt,
      gym_id: JSON.parse(localStorage.getItem('currentGym')).id,
    });
  }
  createClient(gymId: number, n: string, s: string, u: string, p: string, e: string, ph: string, st: string): Promise <IClient> {
    return this.post(`http://localhost:8000/api/gym_lists/${gymId}/client_list/`, {
      name: n,
      surname: s,
      username: u,
      password: p,
      email: e,
      phone: ph,
      status: st,
      image: 'https://cdn1.vectorstock.com/i/1000x1000/82/55/anonymous-user-circle-icon-vector-18958255.jpg',
      gym_id: gymId,
    });
  }
}
