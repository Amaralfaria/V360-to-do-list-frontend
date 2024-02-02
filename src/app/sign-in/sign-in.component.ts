import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../models/user';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  standalone: true,
  host:  {ngSkipHydration: 'true'},
  imports: [FormsModule],
  providers: [LoginService],
})
export class SignInComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm){
    var user: User = {
      "email": form.value.email,
      "password": form.value.password
    }

    console.log('teste')

    this.loginService.login(user).subscribe((data: any) => {
      console.log('login')
      localStorage.setItem("tkn", data.access);
      localStorage.setItem("refresh_tkn", data.refresh);
      this.router.navigate(['home/']);
    }, error => {
      window.alert("Não foi possivel realizar login:" +  error)
    })

  }

}
