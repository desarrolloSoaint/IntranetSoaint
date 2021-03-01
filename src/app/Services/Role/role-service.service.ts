import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  private baseUrl = 'http://127.0.0.1:8000/api'

  constructor(private httpClient:HttpClient) { }

  getRoles(){
    return this.httpClient.get(`${this.baseUrl}/getRoles`);
  }
}
