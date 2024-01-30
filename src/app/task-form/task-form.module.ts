import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form.component';
import { FormsModule } from '@angular/forms';
import { TaskFormCommunicatorService } from '../task-base/services/taskFormCommunicator.service';
import { TaskService } from './services/task.service';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [TaskFormComponent],
  exports: [TaskFormComponent],
  providers: [TaskFormCommunicatorService, TaskService]
})
export class TaskFormModule { }
