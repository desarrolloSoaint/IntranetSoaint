import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/Services/Schedule/schedule.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  button: any;
  data:any= [];
  crud_titles:any;

  constructor(private scheduleService: ScheduleService) { 
    this.button = {
      add:  {title: "Ver Lista de Horarios",size: "btn-block"},
      show: {title: "Descripción",size: "btn-block"},
    }
    this.crud_titles = {
      update: {title:"Modificar"},
    }
  }

  ngOnInit(): void {
    this.scheduleService.getSchedulesActive().subscribe(res=> {
      this.data = res  
    });
  }
}
