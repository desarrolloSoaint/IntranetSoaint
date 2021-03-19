import { Component, OnInit } from '@angular/core';
import { AccessControlService } from 'src/app/Services/AccessControl/access-control.service';

@Component({
  selector: 'app-entry-time',
  templateUrl: './entry-time.component.html',
  styleUrls: ['./entry-time.component.scss']
})
export class EntryTimeComponent implements OnInit {

  button: any;
  body:any;
  message:string;
  observation:boolean = false;
  history :any;
  data = {
    user_id: null,
    rule_name : "Horario de Trabajo"
  }
  data_observation = {
    user_id: null,
    rule_name : "Horario de Trabajo",
    text:null
  }

  constructor(private accessService: AccessControlService) { 
    this.button = {
      entry:  {title: "Hora Entrada"},
      leave:  {title: "Hora Salida"},
    }
  }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user){
      this.data.user_id = user.id;
      this.data_observation.user_id = user.id;
      this.accessService.getCurrentUserHistory(this.data).subscribe(res=> {
        this.history = res      
      });
    }
  }

  registerEntry(){
    this.accessService.registerStart(this.data).subscribe(res=>{
      this.body = res;
      this.message = this.body.message;
      this.observation = this.body.observation;
      this.ngOnInit();
    })
  }

  registerLeave(){
    this.accessService.registerFinish(this.data).subscribe(res=>{
      this.body = res;
      this.message = this.body.message;
      this.observation = this.body.observation;
      this.ngOnInit();
    })
  }

  addObservation(){
    this.accessService.addObservation(this.data_observation).subscribe(res=>{
      this.body = res;
      this.message = this.body.message;
      this.observation = false;      
      this.ngOnInit();
    })
  }

}
