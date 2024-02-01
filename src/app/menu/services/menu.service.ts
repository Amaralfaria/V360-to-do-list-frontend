import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getAccessJWTToken } from '../../utils/authorization';

const LOGOUT_API = 'http://localhost:8000/user/logout/';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  headers!: HttpHeaders;

constructor(private http: HttpClient) {
  this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getAccessJWTToken()}`
  });
}

logoutUser(){
  return this.http.post(`${LOGOUT_API}`,null,{headers:this.headers})
}



}
