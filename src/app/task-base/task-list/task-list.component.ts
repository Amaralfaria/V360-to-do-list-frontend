import { Component, OnInit } from '@angular/core';
import { List, ListItem } from '../../models/list';
import { TaskListService } from '../services/task-list.service';
import { TaskCommunicationService } from '../../list-base/services/taskCommunication.service';
import { TaskFormCommunicatorService } from '../services/taskFormCommunicator.service';
import { TaskService } from '../../task-form/services/task.service';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  tasks!: ListItem[];
  list!: List;
  icon = faAdd;

  constructor(private listService: TaskListService, private communicator: TaskCommunicationService, private formCommunicator: TaskFormCommunicatorService, private taskService: TaskService) {  }

  ngOnInit() {
    this.communicator.changeList.subscribe((data: List) => {
      this.list = data;
      this.listService.getTasks(data.id).subscribe((data: any) =>{
        this.tasks = data.list_items
      })
    })

    this.taskService.updateTaskList.subscribe((data: any) => {
      this.listService.getTasks(this.list.id).subscribe((data: any) =>{
        this.tasks = data.list_items
      })
    })

  }

  handleNewTask(){
    this.formCommunicator.newTask.emit(this.list);
  }

}
