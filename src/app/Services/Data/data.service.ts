import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  email: any;
  password:any;
  selectValue:any

  constructor() { }

  public setValue(value,type: any):void{
    if (type=="email"){
      this.email = value;
    }else if (type=="password"){
      this.password = value;
    }else if (type=="select"){
      this.selectValue = value;
    }
  }

  public clearValues(){
    this.email = null;
    this.password = null;
    this.selectValue = null;
  }

  public getValue(type:string):any {
    if (type=="email"){
      return this.email;  
    }else if (type=="password"){
      return this.password;
    }else if (type=="select"){
      return this.selectValue;
    }
  }

}
