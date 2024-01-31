import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignUpService } from '../services/signUp.service';
import { User } from '../../models/user';
import { LoginService } from '../../login-user/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  constructor(private signUpService: SignUpService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  signUp(form: NgForm){
    var user: User = {
      username: form.value.username,
      email: form.value.email,
      password: form.value.password
    }

    form.reset()

    this.signUpService.createUser(user).subscribe((data:any) => {

      this.loginService.login(user).subscribe((data: any) => {
        console.log('login')
        localStorage.setItem("tkn", data.access);
        localStorage.setItem("refresh_tkn", data.refresh);
        this.router.navigate(['home/'])
      }, (error: any) => {
        window.alert("Não foi possivel realizar login")
      })
    }, (error: any) => {
      window.alert('Invalid fields');
    })
  }

}
