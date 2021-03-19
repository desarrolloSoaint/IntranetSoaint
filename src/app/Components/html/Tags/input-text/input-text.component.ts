import { Component, OnInit , Input} from '@angular/core';
import { DataService } from 'src/app/Services/Data/data.service';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() data:any;
  public value:string;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {

  }

  setInputValue(newValue){
    this.value= newValue;
    this.dataService.setValue(this.value,this.data.type)
  }
  
}
