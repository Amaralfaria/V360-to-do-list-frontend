import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { List, ListItem } from '../models/list';
import { TaskFormCommunicatorService } from '../task-base/services/taskFormCommunicator.service';
import { TaskService } from './services/task.service';
import { error } from 'console';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  host: {ngSkipHydration: 'true'},
})
export class TaskFormComponent implements OnInit {

  @Input()
  task!: ListItem;

  @ViewChild('task_form') form: any; 


  

  constructor(private communicator: TaskFormCommunicatorService, private taskService: TaskService) {
    this.task = {};
  }

  ngOnInit() {
    this.communicator.selectTask.subscribe((data: ListItem) => {
      console.log('puxou');
      this.task = data;
      this.form.nativeElement.classList.remove('form_closed')
    })

    this.communicator.newTask.subscribe((data: List) => {
      console.log('novo');
      this.task = {}
      this.task.list = data.id;
      this.form.nativeElement.classList.remove('form_closed')
    })
  }

  closeForm(){
    this.form.nativeElement.classList.add('form_closed')
  }

  onSubmit(event: string){
    if(event === "create_btn"){
      this.taskService.createTask(this.task).subscribe(response => {
        console.log('criou');
        this.taskService.updateTaskList.emit();
      }, error =>{
        console.log('erro')
      })
    }else if(event === "save_btn"){
      this.taskService.editTask(this.task).subscribe(response => {
        console.log('salvou');
        this.taskService.updateTaskList.emit();
      }, error =>{
        console.log('erro')
      })
    }else if(event === "delete_btn"){
      if(this.task.id == undefined){
        return 
      }

      this.taskService.deleteTask(this.task.id).subscribe(response => {
        console.log('deletou');
        this.taskService.updateTaskList.emit();
      }, error =>{
        console.log('erro')
      })

    }
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
