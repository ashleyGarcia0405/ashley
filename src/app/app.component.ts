import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../core/navbar/navbar.component';
import { AboutComponent } from '../components/about/about.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { ProjectsComponent } from '../components/projects/projects.component';
import { CommonModule } from '@angular/common';
import { WorkComponent } from '../components/work/work.component';
import { ContactComponent } from '../components/contact/contact.component';
import { BlogComponent } from '../components/blog/blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AboutComponent, ProjectsComponent, CommonModule, WorkComponent, 
    ContactComponent, BlogComponent, ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ashley Garcia';
  paragraph = `Hi! I'm a senior studying Computer Science and Applied Maths at Columbia University.\nI'm a builder and I love making cool/interactive digital experiences. Outside of work and school, I sail with Columbia Sailing and make niche playlists on Spotify.`;
  displayedTitle = '';
  displayedParagraph = '';
  private titleIndex = 0;
  private paragraphIndex = 0;
  showCursor = true;
  typingParagraph = false;

  ngOnInit() {
    this.typeTitle();
  }

  private typeTitle() {
    if (this.titleIndex < this.title.length) {
      this.displayedTitle += this.title.charAt(this.titleIndex);
      this.titleIndex++;
      setTimeout(() => this.typeTitle(), 30);
    } else {
      setTimeout(() => {
        this.typingParagraph = true;
        this.typeParagraph();
      }, 200);
    }
  }

  private typeParagraph() {
    if (this.paragraphIndex < this.paragraph.length) {
      this.displayedParagraph += this.paragraph.charAt(this.paragraphIndex);
      this.paragraphIndex++;
      setTimeout(() => this.typeParagraph(), 20);
    } else {
      setTimeout(() => {
        this.showCursor = false;
      }, 200);
    }
  }

  constructor() {
    // Set the theme to light
    document.documentElement.setAttribute('data-theme', 'light');
  }
}
