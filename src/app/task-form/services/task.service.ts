import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListItem } from '../../models/list';

const LISTS_API = 'http://localhost:8000/list';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  headers!: HttpHeaders;

constructor(private http: HttpClient) {
  this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3NzcxOTU5LCJpYXQiOjE3MDY0NzU5NTksImp0aSI6IjYxZGE5ZGQxYmZmOTQ1OTBhNGVjZWE2ZDcyYmIzODMwIiwidXNlcl9pZCI6N30.E1rDyLmV22LCQE3MLX6ZCOKzn9_AVgjuRAIr2-u_3K8'
  });
}

  createTask(task: ListItem){
    let body = {
      "item_name": task.item_name,
      "description":task.description,
      "due_date":task.due_date,
      "list":task.list
  }

    return this.http.post(`${LISTS_API}/item/`,body,{headers:this.headers})
  }



}
