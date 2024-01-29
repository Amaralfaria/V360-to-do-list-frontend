import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../models/list';
import { TaskListService } from '../services/task-list.service';
import { TaskCommunicationService } from '../../list-base/services/taskCommunication.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks!: ListItem[];

  constructor(private listService: TaskListService, private communicator: TaskCommunicationService) {  }

  ngOnInit() {
    this.listService.getTasks(2).subscribe((data: any) =>{
      this.tasks = data.list_items
    })

    this.communicator.changeList.subscribe((data: any) => {
      this.listService.getTasks(data).subscribe((data: any) =>{
        this.tasks = data.list_items
      })
    })

  }

}
