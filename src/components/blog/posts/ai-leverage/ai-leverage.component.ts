import { Component } from '@angular/core';
import { BlogPostLayoutComponent } from '../../blog-post-layout/blog-post-layout.component';

@Component({
  selector: 'app-blog-ai-leverage',
  standalone: true,
  imports: [BlogPostLayoutComponent],
  template: `
    <app-blog-post-layout
      title="AI as Leverage, Not a Crutch"
      date="Feb 2, 2026"
      [readingTime]="10"
    >
      <!-- Write your post content here. Plain HTML, YouTube iframes, images — anything goes. -->
      <p>Coming soon.</p>
    </app-blog-post-layout>
  `
})
export class AiLeverageComponent {}