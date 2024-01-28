import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from '../../models/list';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input()
  task!: ListItem;

  constructor() {}

  ngOnInit() {
  }

  handleCheck(): void{

  }

}
