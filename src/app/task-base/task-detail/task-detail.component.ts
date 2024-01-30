import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from '../../models/list';
import { TaskFormCommunicatorService } from '../services/taskFormCommunicator.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input()
  task!: ListItem;

  constructor(private communicator: TaskFormCommunicatorService) {}

  ngOnInit() {
  }

  handleCheck(): void{

  }

  handleSelectTask(task: ListItem){
    console.log('chamou');
    this.communicator.selectTask.emit(task);
  }

}
