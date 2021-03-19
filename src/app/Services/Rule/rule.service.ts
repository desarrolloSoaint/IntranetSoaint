import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { URL_BACK } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  constructor(private httpClient:HttpClient) { }
  
  getRules(){
    return this.httpClient.get(`${URL_BACK}/getRules`);
  }

  countOfRules(){
    return this.httpClient.get(`${URL_BACK}/countOfRules`);
  }

  getRuleById(id){
    return this.httpClient.get(`${URL_BACK}/showRule/${id}`);
  }

}
