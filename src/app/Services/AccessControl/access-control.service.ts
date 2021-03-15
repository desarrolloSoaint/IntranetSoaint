import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AccessControlService {

  private baseUrl = 'http://127.0.0.1:8000/api'

  constructor(private httpClient:HttpClient) { }


  getHistory(){
    return this.httpClient.get(`${this.baseUrl}/getHistory`);
  }

  getCurrentUserHistory(data){
    return this.httpClient.post(`${this.baseUrl}/getCurrentUserHistory`,data);
  }

  getHistoryByUserAndRule(data){
    return this.httpClient.post(`${this.baseUrl}/getHistoryByUserAndRule`,data);
  }

  registerStart(data){
    return this.httpClient.post(`${this.baseUrl}/registerStartTime`,data);
  }

  registerFinish(data){
    return this.httpClient.post(`${this.baseUrl}/registerFinishTime`,data);
  }

  // export(){
  //   return this.httpClient.get(`${this.baseUrl}/export`);
  // }

  clearHistory(){
    return this.httpClient.get(`${this.baseUrl}/clearHistory`);
  }
}