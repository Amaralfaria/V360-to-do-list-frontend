import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TaskBaseModule } from './task-base/task-base.module';
import { ListBaseModule } from './list-base/list-base.module';
import { MenuModule } from './menu/menu.module';
import { TaskFormModule } from './task-form/task-form.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TaskBaseModule,ListBaseModule,MenuModule,TaskFormModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-list';
}
