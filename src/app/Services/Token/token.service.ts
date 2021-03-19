import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { URL_BACK } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login: `${URL_BACK}/login`,
    register : `${URL_BACK}/register`
  }

  // private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private httpClient: HttpClient) { }

  handle(token,user){
    this.set(token,user);
  }

  set(token,user){
    localStorage.setItem('token',token);
    localStorage.setItem('user',JSON.stringify(user));
    const time_to_login = Date.now() + 3600000  ; // 1 hour
    localStorage.setItem('timer', JSON.stringify(time_to_login));
  }

  get(){
    return localStorage.getItem('token');
  }

  remove(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('timer');
  }

  isValid(){
    const token = this.get();
    if (token){
      const payload = this.payload(token);

      if (payload){
        return Object.values(this.iss).indexOf(payload.iss) >-1 ? true:false;
      }
    }
    return false;
  }

  payload(token){
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload){
    return JSON.parse(atob(payload));
  }

  refreshToken(){
    return this.httpClient.post(`${URL_BACK}/refreshToken`,null);
  }

  loggedIn(){
    return this.isValid();
  }
}
