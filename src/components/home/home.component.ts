import { AfterViewInit, Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { LabPreviewComponent } from '../lab-preview/lab-preview.component';
import { ResearchPreviewComponent } from '../research-preview/research-preview.component';
import { BlogPreviewComponent } from '../blog-preview/blog-preview.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, AboutComponent, ProjectsComponent, LabPreviewComponent, ResearchPreviewComponent, BlogPreviewComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);

  // The hero swaps between two different photos at the 600px breakpoint, so
  // crossing it leaves the <img> empty until the other file downloads. Warm
  // the cache once the page is idle to keep that swap instant.
  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const counterpart = window.matchMedia('(max-width: 600px)').matches
      ? '/ashley-portrait.webp'
      : '/ashley-wide.webp';

    const schedule = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 2000));
    schedule(() => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = 'image';
      link.href = counterpart;
      document.head.appendChild(link);
    });
  }
}
