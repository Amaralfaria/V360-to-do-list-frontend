import { Component, OnInit } from '@angular/core';
import { List } from '../../models/list';
import { ListService } from '../services/list.service';
import { NgForm } from '@angular/forms';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lists-list',
  templateUrl: './lists-list.component.html',
  styleUrls: ['./lists-list.component.css']
})
export class ListsListComponent implements OnInit {


  lists!: List[];
  list_name: string = '';
  icon = faAdd

  constructor(private listService: ListService) {
    
  }
  
  // onRemove(){
  //   this.remove.emit(this.lists);
  // }

  ngOnInit() {
    this.listService.getLists().subscribe((data: any) => {
      this.lists = data.lists;
    })
  }

  handleCreate(form: NgForm){
    this.listService.createList(form.value.list_name).subscribe((data:any) => {
      form.reset();
      this.listService.getLists().subscribe((data: any) => {
        this.lists = data.lists;
      })
    })


  }

  handleDelete(list: List){
    this.listService.deleteList(list).subscribe((data:any) => {
      this.listService.getLists().subscribe((data: any) => {
        this.lists = data.lists;
      })
    })
  }

  

}
