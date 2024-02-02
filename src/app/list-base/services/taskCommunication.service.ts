import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { List } from '../../models/list';

@Injectable({
  providedIn: 'root'
})
export class TaskCommunicationService {

constructor() { }

  changeList: EventEmitter<List> = new EventEmitter();

}
