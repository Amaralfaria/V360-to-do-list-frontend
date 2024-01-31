import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 
import { User } from '../../models/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm){
    var user: User = {
      "email": form.value.email,
      "password": form.value.password
    }

    this.loginService.login(user).subscribe((data: any) => {
      console.log('login')
      localStorage.setItem("tkn", data.access);
      localStorage.setItem("refresh_tkn", data.refresh);
      this.router.navigate(['home/'])
    }, (error: any) => {
      window.alert("Não foi possivel realizar login")
    })
  }

}
