import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { FormsModule } from '@angular/forms';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { SignUpService } from './services/signUp.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  declarations: [SignUpComponent,SignUpFormComponent],
  providers: [SignUpService],
  exports: [SignUpComponent]
})
export class SignUpModule { }
