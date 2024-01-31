import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { List } from '../../models/list';

const LISTS_API = 'http://localhost:8000/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3NzcxOTU5LCJpYXQiOjE3MDY0NzU5NTksImp0aSI6IjYxZGE5ZGQxYmZmOTQ1OTBhNGVjZWE2ZDcyYmIzODMwIiwidXNlcl9pZCI6N30.E1rDyLmV22LCQE3MLX6ZCOKzn9_AVgjuRAIr2-u_3K8'
    });
  }

  getLists(): any{
    return this.http.get(`${LISTS_API}/user_lists/`,{headers:this.headers})
  }

  createList(listName: string): any{
    return this.http.post(`${LISTS_API}/create/`,{"list_name":listName},{headers:this.headers})
  }

  deleteList(list: List): any{
    return this.http.delete(`${LISTS_API}/get_list/${list.id}`,{headers:this.headers})
  }

}

