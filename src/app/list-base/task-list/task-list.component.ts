import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../models/list';
import { TaskListService } from '../services/task-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks!: ListItem[];

  constructor(private listService: TaskListService) {  }

  ngOnInit() {
    this.listService.getTasks().subscribe((data: any) =>{
      console.log(data.list_items)
      this.tasks = data.list_items
    })
  }

}
