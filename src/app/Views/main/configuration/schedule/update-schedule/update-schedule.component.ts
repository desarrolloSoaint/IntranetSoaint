import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from 'src/app/Services/Schedule/schedule.service';

@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrls: ['./update-schedule.component.scss']
})
export class UpdateScheduleComponent implements OnInit {

  id:any;
  button:any;
  timeInvalid:any;
  error : any={};
  schedule:any = {};
  scheduleForm = {
    start_time: null,
    finish_time: null,
    rule_id: null
  }
  
  constructor(  private scheduleService: ScheduleService,
                private router: Router,
                private _route:ActivatedRoute)
  {
    this.button = {
      update:{title: "Modficar",size:"btn-block"},
      getBack:{title: "Volver",size:"btn-block"}
    }
  }

  ngOnInit(): void {
    this.getData();
  }

  onSubmit(){
    this.timeInvalid=null;
    if (this.scheduleForm.start_time >= this.scheduleForm.finish_time){
      this.timeInvalid = "La hora de inicio tiene que ser menor que la final"
    }else{
      this.scheduleService.updateSchedule(this.scheduleForm,this.id).subscribe(
        data => this.router.navigateByUrl('/main/configuration/schedules-table'),
        error => this.error=error.error
      );
    }
  }

  getData(){
    this.id = this._route.snapshot.paramMap.get('id');
    this.scheduleService.getScheduleById(this.id).subscribe(res=>{
      this.schedule = res;
      this.scheduleForm.rule_id = this.schedule.rule_id
      this.scheduleForm.start_time = this.schedule.start_time;
      this.scheduleForm.finish_time = this.schedule.finish_time;
    });
  }

}
