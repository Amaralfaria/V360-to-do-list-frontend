import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { FormsModule } from '@angular/forms';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { SignUpService } from './services/signUp.service';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [SignUpComponent,SignUpFormComponent],
  providers: [SignUpService],
  exports: [SignUpComponent]
})
export class SignUpModule { }
