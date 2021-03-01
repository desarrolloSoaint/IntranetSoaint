import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() table:any;
  crud_titles:any
  constructor() {
    this.crud_titles = [{title : 'Ver'},{title : 'Modificar'},{title : 'Eliminar'}]
   }

  ngOnInit(): void {
  }

}
