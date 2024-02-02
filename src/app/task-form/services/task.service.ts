import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListItem } from '../../models/list';
import { getAccessJWTToken } from '../../utils/authorization';
import { EventEmitter } from '@angular/core';

const LISTS_API = 'http://localhost:8000/list';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  headers!: HttpHeaders;

constructor(private http: HttpClient) {
  this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getAccessJWTToken()}`
  });
}

  updateTaskList: EventEmitter<any> = new EventEmitter();

  createTask(task: ListItem){
    let body = {
      "item_name": task.item_name,
      "description":task.description,
      "due_date":task.due_date,
      "list":task.list
  }

    return this.http.post(`${LISTS_API}/item/`,body,{headers:this.headers})
  }

  editTask(task: ListItem){
    let body = {
      "item_name": task.item_name,
      "description":task.description,
      "due_date":task.due_date,
  }
    return this.http.put(`${LISTS_API}/item/${task.id}`,body,{headers:this.headers})
  }

  deleteTask(task_id: number){
    return this.http.delete(`${LISTS_API}/item/${task_id}`,{headers:this.headers})
  }



}
