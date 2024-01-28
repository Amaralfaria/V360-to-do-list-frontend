import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../models/list';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: ListItem[];

  constructor() {
    this.tasks = [
      {
        item_name: 'item 1',
        description: 'good item',
        done: true,
        due_date: new Date,
        list: 1,
      }
    ]
  }

  ngOnInit() {
  }

}
