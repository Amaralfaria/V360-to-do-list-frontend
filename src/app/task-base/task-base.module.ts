import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskBaseComponent } from './task-base.component';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskListService } from './services/task-list.service';
import { TaskService } from './services/task.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,FormsModule, HttpClientModule, FontAwesomeModule
  ],
  declarations: [TaskListComponent,TaskDetailComponent],
  exports: [TaskListComponent],
  providers: [TaskListService, TaskService]
})
export class TaskBaseModule { }
