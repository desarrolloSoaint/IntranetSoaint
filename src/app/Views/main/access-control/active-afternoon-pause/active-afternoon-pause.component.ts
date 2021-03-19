import { Component, OnInit } from '@angular/core';
import { AccessControlService } from 'src/app/Services/AccessControl/access-control.service';

@Component({
  selector: 'app-active-afternoon-pause',
  templateUrl: './active-afternoon-pause.component.html',
  styleUrls: ['./active-afternoon-pause.component.scss']
})
export class ActiveAfternoonPauseComponent implements OnInit {

  button: any;
  body:any;
  message:string;
  history :any;
  data = {
    user_id: null,
    rule_name : "Pausa Activa Tarde"
  }

  constructor(private accessService: AccessControlService) { 
    this.button = {
      start:  {title: "Hora Inicio"},
      finish:  {title: "Hora Fin"},
    }
  }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user){
      this.data.user_id = user.id;
      this.accessService.getCurrentUserHistory(this.data).subscribe(res=> {
        this.history = res   
      });
    }
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
