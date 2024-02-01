import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getAccessJWTToken } from '../../utils/authorization';
import { ListItem } from '../../models/list';

const TASK_API = 'http://localhost:8000/list/item/';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAccessJWTToken()}`
    });
  }

  finishTask(task: ListItem): any{
    return this.http.post(`${TASK_API}finish/${task.id}`,null,{headers:this.headers})
  }

  unfinishTask(task: ListItem): any{
    return this.http.post(`${TASK_API}unfinish/${task.id}`,null,{headers:this.headers})
  }



}
