import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private baseUrl = 'http://127.0.0.1:8000/api'

  constructor(private httpClient:HttpClient) { }
  
  getSchedules(){
    return this.httpClient.get(`${this.baseUrl}/getSchedules`);
  }

  getScheduleById(id){
    return this.httpClient.get(`${this.baseUrl}/showSchedule/${id}`);
  }

  createSchedule(data){
    return this.httpClient.post(`${this.baseUrl}/addSchedule`,data);
  }

  updateSchedule(data,id){
    return this.httpClient.put(`${this.baseUrl}/updateSchedule/${id}`,data);
  }

  deleteSchedule(id){
    return this.httpClient.delete(`${this.baseUrl}/deleteSchedule/${id}`);
  }

  changeStatus(id){
    return this.httpClient.post(`${this.baseUrl}/statusSchedule/${id}`,null);
  }

  getSchedulesActive(){
    return this.httpClient.get(`${this.baseUrl}/activeSchedules`);
  }

  getSchedulesInactive(){
    return this.httpClient.get(`${this.baseUrl}/inactiveSchedules`);
  }

}
