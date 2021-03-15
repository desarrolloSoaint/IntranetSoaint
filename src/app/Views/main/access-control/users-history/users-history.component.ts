import { Component, OnInit } from '@angular/core';
import { AccessControlService } from 'src/app/Services/AccessControl/access-control.service';
import { ExcelService } from 'src/app/Services/Excel/excel.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-users-history',
  templateUrl: './users-history.component.html',
  styleUrls: ['./users-history.component.scss']
})
export class UsersHistoryComponent implements OnInit {
  button:any;
  data:any = [];
  export_data:any = [];
  user_filter:any;
  day:number;
  public page = 1;
  public pageSize = 10;
  
  constructor(private accessService: AccessControlService,
              private excelService: ExcelService){
    this.button = {
      export: {title: "Exportar Historial",size:"btn-lg"}
    }
  }

  ngOnInit(): void {
    this.accessService.getHistory().subscribe(res=>{
      this.data = res,
      this.export_data = res
    });
    this.day = Number(new Date().getDate());
  }

  search(){
    if(this.user_filter == ""){
      this.ngOnInit();
    }else{
      this.data = this.data.filter(res=>{
        return res.email.toLocaleLowerCase().match(this.user_filter.toLocaleLowerCase());
      });
    }
  }

  exportData():void{
    let date = formatDate(new Date(), 'yyyy/MM/dd', 'en');
    let file_name = "export-history-";
    file_name = file_name.concat(date.toString()) 
    this.excelService.exportAsExcelFile(this.export_data,file_name);
    this.accessService.clearHistory().subscribe(res=>{
      console.log(res)
      this.ngOnInit();
    });
  }
}
