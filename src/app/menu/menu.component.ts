import { Component, OnInit } from '@angular/core';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  icon = faArrowRightFromBracket;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleSignOut(){
    localStorage.removeItem('tkn');
    localStorage.removeItem('refresh_tkn');
    this.router.navigate(['/']);
  }

}
