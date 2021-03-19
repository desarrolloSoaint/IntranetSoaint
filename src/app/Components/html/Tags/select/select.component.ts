import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/Data/data.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() data: any;
  public type = "select";
  public value:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  setSelectValue(newValue:any){
    this.value = newValue;
    this.dataService.setValue(this.value,this.type)
  }

}