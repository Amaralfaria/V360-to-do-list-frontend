import { EventEmitter, Injectable } from '@angular/core';
import { ListItem } from '../../models/list';

@Injectable({
  providedIn: 'root'
})
export class TaskFormCommunicatorService {

  selectTask: EventEmitter<ListItem> = new EventEmitter();

  constructor() { }

}
