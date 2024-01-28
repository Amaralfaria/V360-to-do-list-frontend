import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { ListBaseModule } from '../list-base/list-base.module';

@NgModule({
  imports: [
    CommonModule, ListBaseModule
  ],
  exports:[MenuComponent],
  declarations: [MenuComponent]
})
export class MenuModule { }
