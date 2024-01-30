import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from '../models/list';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Input()
  task!: ListItem;

  constructor() {
  }

  ngOnInit() {
  }

  allInputsFilled(): boolean{
    if(this.task == null){
      return false
    }

    return (
      this.task.item_name.trim() !== '' &&
      this.task.description.trim() !== '' &&
      this.task.due_date !== null &&  // Assuming due_date is a required field
      this.task.list !== null  // Assuming list is a required field
    );
  }

}
