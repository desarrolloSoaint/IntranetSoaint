import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { URL_BACK } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class AccessControlService {

  constructor(private httpClient:HttpClient) { }


  getHistory(){
    return this.httpClient.get(`${URL_BACK}/getHistory`);
  }

  getCurrentUserHistory(data){
    return this.httpClient.post(`${URL_BACK}/getCurrentUserHistory`,data);
  }

  getHistoryByUserAndRule(data){
    return this.httpClient.post(`${URL_BACK}/getHistoryByUserAndRule`,data);
  }

  registerStart(data){
    return this.httpClient.post(`${URL_BACK}/registerStartTime`,data);
  }

  registerFinish(data){
    return this.httpClient.post(`${URL_BACK}/registerFinishTime`,data);
  }

  addObservation(data){
    return this.httpClient.post(`${URL_BACK}/addObservation`,data);
  }

  // export(){
  //   return this.httpClient.get(`${this.baseUrl}/export`);
  // }

  clearHistory(){
    return this.httpClient.get(`${URL_BACK}/clearHistory`);
  }
}