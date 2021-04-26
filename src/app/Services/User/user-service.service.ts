import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_BACK } from 'src/app/config/config';
import { TokenService } from '../Token/token.service';
import { AuthService } from '../Auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient:HttpClient,
              private tokenService:TokenService,
              private authService:AuthService,
              private router: Router) { }

  login(form:any){
    return this.httpClient.post(`${URL_BACK}/login`,form);
  }

  logout(){
    return this.httpClient.post(`${URL_BACK}/logout`,null);
  }

  register(form:any){
    return this.httpClient.post(`${URL_BACK}/register`,form);
  }

  getUserRole(body:any){
    return this.httpClient.post(`${URL_BACK}/getUserRole`,body);
  }

  getUsers(){
    return this.httpClient.get(`${URL_BACK}/getUsers`);
  }

  countOfUsers(){
    return this.httpClient.get(`${URL_BACK}/countOfUsers`);
  }

  sessionTime(){
    const timer = JSON.parse(localStorage.getItem('timer'));
    if (timer && (Date.now() > timer)) {
      this.logout();
      this.tokenService.remove();
      this.authService.changeAuthStatus(false);
      this.router.navigateByUrl('/login')
    }
  }
}
