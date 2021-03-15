import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = 'http://127.0.0.1:8000/api'

  constructor(private httpClient:HttpClient) { }

  login(form:any){
    return this.httpClient.post(`${this.baseUrl}/login`,form);
  }

  logout(){
    return this.httpClient.post(`${this.baseUrl}/logout`,null);
  }

  register(form:any){
    return this.httpClient.post(`${this.baseUrl}/register`,form);
  }

  getUserRole(body:any){
    return this.httpClient.post(`${this.baseUrl}/getUserRole`,body);
  }

  getUsers(){
    return this.httpClient.get(`${this.baseUrl}/getUsers`);
  }
}
