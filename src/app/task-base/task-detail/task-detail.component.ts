import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from '../../models/list';
import { TaskFormCommunicatorService } from '../services/taskFormCommunicator.service';
import { TaskService } from '../services/task.service';
import { error } from 'console';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input()
  task!: ListItem;

  constructor(private communicator: TaskFormCommunicatorService, private taskService: TaskService) {}

  ngOnInit() {
  }

  handleCheck(checker: any): void{
    if(checker.checked){
      this.taskService.finishTask(this.task).subscribe((data: any) => {
        console.log('Finalizada');
      }, (error: any) =>{
        console.log('erro')
      })
    }else{
      this.taskService.unfinishTask(this.task).subscribe((data: any) => {
        console.log('Desfinalizada');
      }, (error: any) =>{
        console.log('erro')
      })
    }
  }

  handleSelectTask(task: ListItem){
    console.log('chamou');
    this.communicator.selectTask.emit(task);
  }

}
