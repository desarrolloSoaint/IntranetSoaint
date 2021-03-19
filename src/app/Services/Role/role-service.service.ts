import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { URL_BACK } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor(private httpClient:HttpClient) { }

  getRoles(){
    return this.httpClient.get(`${URL_BACK}/getRoles`);
  }
}