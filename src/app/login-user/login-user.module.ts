import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserComponent } from './login-user.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginService } from './services/login.service';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [LoginUserComponent,LoginFormComponent],
  exports:[LoginUserComponent,LoginFormComponent],
  providers: [LoginService]
})
export class LoginUserModule { }
