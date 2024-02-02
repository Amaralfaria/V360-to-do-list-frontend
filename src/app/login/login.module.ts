import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { LoginUserModule } from '../login-user/login-user.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, FormsModule, LoginUserModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
