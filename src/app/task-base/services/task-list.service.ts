import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getAccessJWTToken } from '../../utils/authorization';

const LISTS_API = 'http://localhost:8000/list';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAccessJWTToken()}`
    });
  }



  getTasks(list_id: any): any{
    return this.http.get(`${LISTS_API}/items/${list_id}`,{headers:this.headers})
  }

  getTodayTasks(): any{
    return this.http.get(`${LISTS_API}/items/today/`,{headers:this.headers})
  }

}
