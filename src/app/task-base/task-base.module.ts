import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskBaseComponent } from './task-base.component';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskListService } from './services/task-list.service';

@NgModule({
  imports: [
    CommonModule,FormsModule, HttpClientModule
  ],
  declarations: [TaskListComponent,TaskDetailComponent],
  exports: [TaskListComponent],
  providers: [TaskListService]
})
export class TaskBaseModule { }
