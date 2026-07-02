import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavbarComponent } from '../core/navbar/navbar.component';
import { AboutComponent } from '../components/about/about.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { ProjectsComponent } from '../components/projects/projects.component';
import { CommonModule } from '@angular/common';
import { WorkComponent } from '../components/work/work.component';
import { ContactComponent } from '../components/contact/contact.component';
import { BlogPreviewComponent } from '../components/blog-preview/blog-preview.component';
import { ResearchPreviewComponent } from '../components/research-preview/research-preview.component';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AboutComponent, ProjectsComponent, CommonModule, WorkComponent,
    ContactComponent, BlogPreviewComponent, ResearchPreviewComponent, DarkModeToggleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Ashley Garcia';
  paragraph = `Hi! I graduated from Columbia University with a B.S. in Computer Science.\nI am currently interested in AI alignment research. I'm also a builder at heart and I love making cool/interactive digital experiences.\nIn my free time, I sail (just for fun now, not competitively anymore), make niche playlists on Spotify for my friends, and read up on tech/IP case law.`;
  displayedTitle = '';
  displayedParagraph = '';
  private titleIndex = 0;
  private paragraphIndex = 0;
  showCursor = true;
  typingParagraph = false;
  isPortfolioPage = false;
  private routerSubscription: Subscription | undefined;

  constructor(private router: Router) {
    // Initialize theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  ngOnInit() {
    this.checkRoute(this.router.url);
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.checkRoute(event.urlAfterRedirects);
      });

    if (!this.isPortfolioPage) {
      this.typeTitle();
    }
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private checkRoute(url: string) {
    this.isPortfolioPage = url === '/portfolio' || url === '/blog' || url.startsWith('/blog/') || url === '/research';
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

}
