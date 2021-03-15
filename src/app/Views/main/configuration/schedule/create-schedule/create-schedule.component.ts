import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RuleService } from 'src/app/Services/Rule/rule.service';
import { ScheduleService } from 'src/app/Services/Schedule/schedule.service';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.scss']
})
export class CreateScheduleComponent implements OnInit {

  button:any;
  rules:any;
  public value:any;
  error : any={};
  timeInvalid:any;
  scheduleForm = {
    start_time: null,
    finish_time: null,
    rule_id:null
  }
  
  constructor(private scheduleService: ScheduleService,
              private router: Router, 
              private ruleService: RuleService)
  {
    this.button = {
      add:{title: "Agregar",size: "btn-block"},
      getBack:{title: "Volver",size: "btn-block"}
    }
  }

  ngOnInit(): void {
    this.ruleService.getRules().subscribe(res=>(
      this.rules = res
    ));
  }

  onSubmit(){
    this.timeInvalid=null;
    this.scheduleForm.rule_id = this.value;
    if (this.scheduleForm.start_time >= this.scheduleForm.finish_time){
      this.timeInvalid = "La hora de inicio tiene que ser menor que la final"
    }else{
      this.scheduleService.createSchedule(this.scheduleForm).subscribe(
        data => this.router.navigateByUrl('/main/configuration/schedules-table'),
        error => this.error= error.error  
      );
    }    
  }

  setSelectValue(newValue:any){
    this.value = newValue;
  }
}
