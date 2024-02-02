import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';

const LOGIN_API = 'http://localhost:8000/user/create/';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  headers: HttpHeaders;

constructor(private http: HttpClient) {
  this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
}

createUser(user: User){
  let body = {
    "username": user.username,
    "email": user.email,
    "password": user.password
  }

  return this.http.post(`${LOGIN_API}`,body, {headers:this.headers})
}



}
