import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  button: any;
  table: any;

  constructor() { 
    this.button = {title: "Agregar",size: "btn-lg"};
    this.table = {
      th:['Reglas'],
      crud: true
    }
  }

  ngOnInit(): void {
  }

}
