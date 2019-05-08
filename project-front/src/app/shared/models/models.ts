export interface IGym {
  id: number;
  name: string;
  address: string;
  start_time: string;
  end_time: string;
  image: string;
  best_sides: string;
  area: number;
  simulator_positions: number;
}
export interface ICoach {
  id: number;
  name: string;
  surname: string;
  experience: number;
  work_days: string;
  image: string;
  price: number;
}
export interface IClient {
  id: number;
  name: string;
  surname: string;
  age: number;
  status: string;
  registered_date: string;
  image: string;
}
export interface ITest {
  id: number;
  height: number;
  weight: number;
  chest_girth: number;
  waist_circumference: number;
  hip_girth: number;
  body_type: string;
}
export interface ISubscription {
  id: number;
  card_number: string;
  price: number;
  duration: string;
  has_coach: boolean;
  allowed_from: string;
  allowed_until: string;
}
export interface IFeedback {
  id: number;
  date: string;
  comment: string;
}
export interface IAuthResponse {
  'token': string;
}

export interface IAbout {
  id: number;
  photo: string;
  text1: string;
  text2: string;
  text3: string;
}
