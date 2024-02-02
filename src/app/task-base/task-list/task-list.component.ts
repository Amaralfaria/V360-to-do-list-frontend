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
      if(data.id)
      this.getTasks(data.id)
    })

    this.taskService.updateTaskList.subscribe((data: any) => {
      if(this.list.id)
      this.getTasks(this.list.id)
    })

    if(this.list == null){
      this.getTodayTasks();
    }

  }

  handleNewTask(){
    this.formCommunicator.newTask.emit(this.list);
  }

  getTodayTasks(){
    return this.listService.getTodayTasks().subscribe((data: any) =>{
      this.tasks = data.list_items
    })
  }

  getTasks(id: number){
    this.listService.getTasks(id).subscribe((data: any) =>{
      this.tasks = data.list_items
    })
  }

}
