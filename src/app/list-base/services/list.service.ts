import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { List } from '../../models/list';
import { getAccessJWTToken } from '../../utils/authorization';

const LISTS_API = 'http://localhost:8000/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAccessJWTToken()}`
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

