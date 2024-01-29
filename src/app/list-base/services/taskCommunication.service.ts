import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskCommunicationService {

constructor() { }

  changeList: EventEmitter<number> = new EventEmitter();

}
