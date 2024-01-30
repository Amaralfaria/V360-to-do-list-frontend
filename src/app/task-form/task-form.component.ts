import { Component, Input, OnInit } from '@angular/core';
import { List, ListItem } from '../models/list';
import { TaskFormCommunicatorService } from '../task-base/services/taskFormCommunicator.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Input()
  task!: ListItem;


  

  constructor(private communicator: TaskFormCommunicatorService) {
    this.task = {};
  }

  ngOnInit() {
    this.communicator.selectTask.subscribe((data: ListItem) => {
      console.log('puxou');
      this.task = data;
    })

    this.communicator.newTask.subscribe((data: List) => {
      console.log('novo');
      this.task = {}
      this.task.list = data.id;
    })
  }

  allInputsFilled(): boolean{

    return (
      this.task.item_name != undefined && this.task.item_name.trim() !== '' &&
      this.task.description != undefined && this.task.description.trim() !== '' &&
      this.task.due_date !== null &&  // Assuming due_date is a required field
      this.task.list !== null  // Assuming list is a required field
    );
  }

}
