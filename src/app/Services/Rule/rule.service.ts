import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  private baseUrl = 'http://127.0.0.1:8000/api'

  constructor(private httpClient:HttpClient) { }
  
  getRules(){
    return this.httpClient.get(`${this.baseUrl}/getRules`);
  }

  getRuleById(id){
    return this.httpClient.get(`${this.baseUrl}/showRule/${id}`);
  }

}
