import { Component, OnInit,Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: any;
  @Input() inputs: any;
  @Input() selects:any;
  @Input() button:any;
  @Input() error:any;

  @Output() submitForm: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onSubmit(){
    this.submitForm.emit();
  }

  ngOnInit(): void {
  }

}
