import { Component, Input, OnInit } from '@angular/core';
import { List } from '../../models/list';
import { TaskCommunicationService } from '../services/taskCommunication.service';


@Component({
  selector: 'app-lists-detail',
  templateUrl: './lists-detail.component.html',
  styleUrls: ['./lists-detail.component.css']
})
export class ListsDetailComponent implements OnInit {
  
  @Input()
  list!: List;

  constructor(private comunicador: TaskCommunicationService) { }

  ngOnInit() {
  }

  onSelectList(){
    console.log('List selected')
    this.comunicador.changeList.emit(this.list.id)
  }

}
