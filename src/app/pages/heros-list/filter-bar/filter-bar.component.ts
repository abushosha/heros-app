import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {

  @Output() searchEmitter = new EventEmitter();
  @Output() sortEmmiter = new EventEmitter();


  searchControl = new FormControl('');


  constructor() { }

  ngOnInit(): void {
    this.searchControl.valueChanges.subscribe( res => {
      this.searchEmitter.emit(res);
    });
  }

  sort(e) {
    this.sortEmmiter.emit(e.currentTarget.checked);
  }

}
