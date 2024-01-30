import { Component, OnInit } from '@angular/core';
import { List, ListItem } from '../../models/list';
import { TaskListService } from '../services/task-list.service';
import { TaskCommunicationService } from '../../list-base/services/taskCommunication.service';
import { TaskFormCommunicatorService } from '../services/taskFormCommunicator.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks!: ListItem[];
  list!: List;

  constructor(private listService: TaskListService, private communicator: TaskCommunicationService, private formCommunicator: TaskFormCommunicatorService) {  }

  ngOnInit() {
    this.listService.getTasks(2).subscribe((data: any) =>{
      this.tasks = data.list_items
      this.list = {}
      this.list.id = 2
    })

    this.communicator.changeList.subscribe((data: List) => {
      this.list = data;
      this.listService.getTasks(data.id).subscribe((data: any) =>{
        this.tasks = data.list_items
      })
    })

  }

  handleNewTask(){
    this.formCommunicator.newTask.emit(this.list);
  }

}
