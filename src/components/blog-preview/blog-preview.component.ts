import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BLOG_POSTS, BlogPost } from '../../data/blog-posts';

@Component({
  selector: 'app-blog-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.css']
})
export class BlogPreviewComponent implements OnInit {
  constructor(private router: Router) {}

  featuredPost: BlogPost | null = null;
  sidePosts: BlogPost[] = [];

  openPost(post: BlogPost): void {
    this.router.navigate(['/blog', post.slug]);
  }

  viewAll(): void {
    this.router.navigate(['/blog']);
  }

  ngOnInit(): void {
    const sorted = [...BLOG_POSTS].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    this.featuredPost = sorted[0];
    this.sidePosts = sorted.slice(1, 3);
  }
}