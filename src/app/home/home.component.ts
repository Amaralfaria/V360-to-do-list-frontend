import { Component, OnInit } from '@angular/core';
import { MenuModule } from '../menu/menu.module';
import { TaskBaseModule } from '../task-base/task-base.module';
import { TaskFormModule } from '../task-form/task-form.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [MenuModule, TaskBaseModule,TaskFormModule]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
