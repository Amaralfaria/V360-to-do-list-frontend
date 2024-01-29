import { Component, OnInit } from '@angular/core';
import { List } from '../../models/list';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-lists-list',
  templateUrl: './lists-list.component.html',
  styleUrls: ['./lists-list.component.css']
})
export class ListsListComponent implements OnInit {


  lists!: List[];

  constructor(private listService: ListService) {
    
  }
  
  // onRemove(){
  //   this.remove.emit(this.lists);
  // }

  ngOnInit() {
    this.listService.getLists().subscribe((data: any) => {
      console.log(data.lists);
      this.lists = data.lists;
    })
  }

  

}
