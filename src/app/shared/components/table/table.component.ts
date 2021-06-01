import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableHeader } from 'src/app/core/models/table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() tableHeaders: TableHeader[]; 
  @Input() tableContent: any[]; 
  @Output() viewProfileEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.tableContent)
    console.log(this.tableHeaders)
  }

}

