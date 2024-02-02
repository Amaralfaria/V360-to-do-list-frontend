import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';

const LOGIN_API = 'http://localhost:8000/user/login/';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  
  }
  
  login(user: User){
    let body = {
      "email": user.email,
      "password": user.password
    }
  
    return this.http.post(`${LOGIN_API}`,body)
  }

}
