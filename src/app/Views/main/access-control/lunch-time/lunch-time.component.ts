import { Component, OnInit } from '@angular/core';
import { AccessControlService } from 'src/app/Services/AccessControl/access-control.service';

@Component({
  selector: 'app-lunch-time',
  templateUrl: './lunch-time.component.html',
  styleUrls: ['./lunch-time.component.scss']
})
export class LunchTimeComponent implements OnInit {
  
  button: any;
  table: any;
  body:any;
  message:string;
  history :any;
  data = {
    user_id:null,
    rule_name : "Horario de Almuerzo"
  }

  constructor(private accessService: AccessControlService) { 
    this.button = {
      start:  {title: "Hora Inicio"},
      finish:  {title: "Hora Fin"},
    }
    this.table = {
      th:['Fecha','Hora Inicio','Hora Fin']
    }
  }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user'));
    this.data.user_id = user.id;
    this.accessService.getCurrentUserHistory(this.data).subscribe(res=> {
      this.history = res   
    });
  }

  registerStart(){
    this.accessService.registerStart(this.data).subscribe(res=>{
      this.body = res;
      this.message = this.body.message;
      this.ngOnInit();
    })
  }
  registerFinish(){
    this.accessService.registerFinish(this.data).subscribe(res=>{
      this.body = res;
      this.message = this.body.message;
      this.ngOnInit();
    })
  }

}
