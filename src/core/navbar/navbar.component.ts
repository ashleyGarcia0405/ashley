import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, RouterModule, NgxPageScrollCoreModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeNav: string = "#";

  setActiveNav(nav: string) {
    this.activeNav = nav;
  }
}
