import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.scss']
})
export class AccessControlComponent implements OnInit {

  button: any;
  table: any;

  constructor() { 
    this.button = {title: "Registrar",size: "btn-lg"};
    this.table = {
      th:['Fecha','Hora de Entrada'],
      crud: false
    }
  }

  ngOnInit(): void {
  }

}
