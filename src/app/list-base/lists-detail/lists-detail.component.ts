import { Component, Input, OnInit } from '@angular/core';
import { List } from '../../models/list';

@Component({
  selector: 'app-lists-detail',
  templateUrl: './lists-detail.component.html',
  styleUrls: ['./lists-detail.component.css']
})
export class ListsDetailComponent implements OnInit {
  
  @Input()
  list!: List;

  constructor() { }

  ngOnInit() {
  }

}
