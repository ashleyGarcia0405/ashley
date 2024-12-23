import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../core/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ashley Garcia';
  displayedText = '';
  private index = 0;
  showCursor = true;

  ngOnInit() {
    this.type();
  }

  private type() {
    if (this.index < this.title.length) {
      this.displayedText += this.title.charAt(this.index);
      this.index++;
      setTimeout(() => this.type(), 100); // Adjust typing speed here
    } else {
      setTimeout(() => {
        this.showCursor = false;
      }, 500);
    }
  }

  constructor() {
    // Set the theme to light
    document.documentElement.setAttribute('data-theme', 'light');
  }
}
