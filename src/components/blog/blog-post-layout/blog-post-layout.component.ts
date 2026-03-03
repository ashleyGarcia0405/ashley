import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-post-layout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-post-layout.component.html',
  styleUrls: ['./blog-post-layout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogPostLayoutComponent {
  @Input() title!: string;
  @Input() date!: string;
  @Input() readingTime!: number;
}