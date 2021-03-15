import { Component, OnInit } from '@angular/core';
import { AccessControlService } from 'src/app/Services/AccessControl/access-control.service';

@Component({
  selector: 'app-entry-time',
  templateUrl: './entry-time.component.html',
  styleUrls: ['./entry-time.component.scss']
})
export class EntryTimeComponent implements OnInit {

  button: any;
  table: any;
  body:any;
  message:string;
  history :any;
  data = {
    user_id: null,
    rule_name : "Horario de Trabajo"
  }

  constructor(private accessService: AccessControlService) { 
    this.button = {
      entry:  {title: "Hora de Entrada"},
      leave:  {title: "Hora de Salida"},
    }
    this.table = {
      th:['Fecha','Hora de Entrada','Hora de Salida']
    }
  }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user'));
    this.data.user_id = user.id;
    this.accessService.getCurrentUserHistory(this.data).subscribe(res=> {
      this.history = res      
    });
  }

  registerEntry(){
    this.accessService.registerStart(this.data).subscribe(res=>{
      this.body = res;
      this.message = this.body.message;
      this.ngOnInit();
    })
  }

  registerLeave(){
    this.accessService.registerFinish(this.data).subscribe(res=>{
      this.body = res;
      this.message = this.body.message;
      this.ngOnInit();
    })
  }

}
