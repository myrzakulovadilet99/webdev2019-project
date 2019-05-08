import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MainService} from './main.service';
import {IAuthResponse, IGym, ICoach, IClient, IFeedback, ISubscription, ITest, IAbout} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

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
  }
  getAbout(): Promise<IAbout[]> {
    return this.get('http://localhost:8000/api/about/', {});
  }

  getFeedback(gym: IGym): Promise<IFeedback[]> {
    return this.get(`http://localhost:8000/api/gym_lists/${gym.id}/feedback/`, {});
  }
}
