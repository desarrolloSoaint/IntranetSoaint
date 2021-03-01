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

  register(form:any){
    return this.httpClient.post(`${this.baseUrl}/register`,form);
  }
}
