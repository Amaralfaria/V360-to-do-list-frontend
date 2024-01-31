import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TaskBaseModule } from './task-base/task-base.module';
import { ListBaseModule } from './list-base/list-base.module';
import { MenuModule } from './menu/menu.module';
import { TaskFormModule } from './task-form/task-form.module';
import { FormsModule } from '@angular/forms';
import { LoginUserModule } from './login-user/login-user.module';
import { SignUpModule } from './sign-up/sign-up.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterOutlet,TaskBaseModule,ListBaseModule,MenuModule,TaskFormModule, LoginUserModule, SignUpModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-list';
}
