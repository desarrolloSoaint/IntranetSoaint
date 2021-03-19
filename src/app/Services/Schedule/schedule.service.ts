import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { URL_BACK } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient:HttpClient) { }
  
  getSchedules(){
    return this.httpClient.get(`${URL_BACK}/getSchedules`);
  }

  countOfSchedules(){
    return this.httpClient.get(`${URL_BACK}/countOfSchedules`);
  }

  getScheduleById(id){
    return this.httpClient.get(`${URL_BACK}/showSchedule/${id}`);
  }

  createSchedule(data){
    return this.httpClient.post(`${URL_BACK}/addSchedule`,data);
  }

  updateSchedule(data,id){
    return this.httpClient.put(`${URL_BACK}/updateSchedule/${id}`,data);
  }

  deleteSchedule(id){
    return this.httpClient.delete(`${URL_BACK}/deleteSchedule/${id}`);
  }

  changeStatus(id){
    return this.httpClient.post(`${URL_BACK}/statusSchedule/${id}`,null);
  }

  getSchedulesActive(){
    return this.httpClient.get(`${URL_BACK}/activeSchedules`);
  }

  getSchedulesInactive(){
    return this.httpClient.get(`${URL_BACK}/inactiveSchedules`);
  }

}
