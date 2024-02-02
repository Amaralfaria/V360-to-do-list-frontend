import { Component, OnInit } from '@angular/core';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  icon = faArrowRightFromBracket;

  constructor(private router: Router, private menuService: MenuService) { }

  ngOnInit() {
  }

  handleSignOut(){
    this.menuService.logoutUser().subscribe((data: any) => {
      localStorage.removeItem('tkn');
      localStorage.removeItem('refresh_tkn');
      this.router.navigate(['/']);
    })
  }

  handleMenu(){
    this.menuService.goToMenu.emit();
  }

}
