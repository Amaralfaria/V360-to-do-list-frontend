import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { ListBaseModule } from '../list-base/list-base.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuService } from './services/menu.service';

@NgModule({
  imports: [
    CommonModule, ListBaseModule, FontAwesomeModule
  ],
  exports:[MenuComponent],
  declarations: [MenuComponent],
  providers: [MenuService]
})
export class MenuModule { }
