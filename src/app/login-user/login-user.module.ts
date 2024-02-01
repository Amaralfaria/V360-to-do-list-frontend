import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserComponent } from './login-user.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginService } from './services/login.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  declarations: [LoginUserComponent,LoginFormComponent],
  exports:[LoginUserComponent,LoginFormComponent],
  providers: [LoginService]
})
export class LoginUserModule { }
