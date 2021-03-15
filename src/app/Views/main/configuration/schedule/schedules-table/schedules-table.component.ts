import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/Services/Schedule/schedule.service';

@Component({
  selector: 'app-schedules-table',
  templateUrl: './schedules-table.component.html',
  styleUrls: ['./schedules-table.component.scss']
})
export class SchedulesTableComponent implements OnInit {

  button: any;
  status: boolean = false;
  public page = 1;
  public pageSize = 5;
  data:any= [];
  crud_titles: any;

  constructor(private scheduleService: ScheduleService) { 
    this.button = {
      add:  {title: "+ Añadir",size: "btn-block"},
      show: {title: "Descripción",size: "btn-block"},
      back: {title: "Regresar",size: "btn-block"},
    }
    this.crud_titles = {
      update: {title:"Modificar"},
      delete: {title:"Eliminar"}
    }
  }

  ngOnInit(): void {
    this.scheduleService.getSchedules().subscribe(res=>(
      this.data = res
    ));
  }

  showHide(){
    this.status = !this.status
  }

  deleteScheduleData(id):any{
    this.scheduleService.deleteSchedule(id).subscribe(res=>{
      this.ngOnInit();
    });
  }

  changeScheduleStatus(id):any{
    this.scheduleService.changeStatus(id).subscribe(res=>{
      this.ngOnInit();
    });
  }

}
