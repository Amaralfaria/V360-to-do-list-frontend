import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { List } from '../../models/list';
import { TaskCommunicationService } from '../services/taskCommunication.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-lists-detail',
  templateUrl: './lists-detail.component.html',
  styleUrls: ['./lists-detail.component.css']
})
export class ListsDetailComponent implements OnInit {
  
  @Input()
  list!: List;

  @Output()
  delete: EventEmitter<List> = new EventEmitter();

  icon = faTrash;

  constructor(private comunicador: TaskCommunicationService) { }

  ngOnInit() {
  }

  onSelectList(){
    console.log('List selected')
    this.comunicador.changeList.emit(this.list)
  }

  onDelete(list: List){
    this.delete.emit(list)
  }

}
