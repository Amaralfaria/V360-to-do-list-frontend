import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBaseComponent } from './list-base.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListsListComponent } from './lists-list/lists-list.component';
import { ListsDetailComponent } from './lists-detail/lists-detail.component';
import { ListService } from './services/list.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule, FormsModule, HttpClientModule, FontAwesomeModule
  ],
  declarations: [ListBaseComponent, ListsListComponent,ListsDetailComponent],
  exports: [ListsListComponent],
  providers: [ListService]
})
export class ListBaseModule { }
