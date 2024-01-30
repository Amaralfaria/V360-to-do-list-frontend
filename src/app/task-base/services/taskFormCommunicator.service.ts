import { EventEmitter, Injectable } from '@angular/core';
import { List, ListItem } from '../../models/list';

@Injectable({
  providedIn: 'root'
})
export class TaskFormCommunicatorService {

  selectTask: EventEmitter<ListItem> = new EventEmitter();
  newTask: EventEmitter<List> = new EventEmitter();

  constructor() { }

}
