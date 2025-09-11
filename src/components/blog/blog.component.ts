import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  readingTime: number;
  githubUrl: string;
  markdownFile: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Building My Personal Website',
      summary: 'A deep dive into the design decisions, tech stack, and development process behind this portfolio site. From choosing Angular to implementing clean, minimalist styling, this post covers the entire journey of creating a modern web presence.',
      date: 'Sep 10, 2024',
      readingTime: 5,
      githubUrl: 'https://github.com/yourusername/blog',
      markdownFile: 'building-personal-website.md'
    },
    {
      id: '2',
      title: 'Thoughts on Modern Web Development',
      summary: 'Exploring the current landscape of web development, from framework choices to development philosophies.',
      date: 'Sep 5, 2024',
      readingTime: 7,
      githubUrl: 'https://github.com/yourusername/blog',
      markdownFile: 'modern-web-development.md'
    },
    {
      id: '3',
      title: 'From Academic to Applied: My CS Journey',
      summary: 'Reflecting on the transition from theoretical computer science coursework to building practical applications.',
      date: 'Aug 28, 2024',
      readingTime: 4,
      githubUrl: 'https://github.com/yourusername/blog',
      markdownFile: 'academic-to-applied.md'
    },
    {
      id: '4',
      title: 'Learning TypeScript the Hard Way',
      summary: 'My experience diving deep into TypeScript after years of JavaScript development.',
      date: 'Aug 20, 2024',
      readingTime: 6,
      githubUrl: 'https://github.com/yourusername/blog',
      markdownFile: 'learning-typescript.md'
    },
    {
      id: '5',
      title: 'Database Design Patterns',
      summary: 'Exploring common database design patterns and when to use them in real-world applications.',
      date: 'Aug 15, 2024',
      readingTime: 8,
      githubUrl: 'https://github.com/yourusername/blog',
      markdownFile: 'database-patterns.md'
    },
    {
      id: '6',
      title: 'APIs and You: A Beginner\'s Guide',
      summary: 'Understanding REST APIs, GraphQL, and how to choose the right approach for your project.',
      date: 'Aug 10, 2024',
      readingTime: 5,
      githubUrl: 'https://github.com/yourusername/blog',
      markdownFile: 'apis-beginners-guide.md'
    },
    {
      id: '7',
      title: 'CSS Grid vs Flexbox: When to Use What',
      summary: 'A practical comparison of CSS Grid and Flexbox with real-world examples.',
      date: 'Aug 5, 2024',
      readingTime: 4,
      githubUrl: 'https://github.com/yourusername/blog',
      markdownFile: 'css-grid-vs-flexbox.md'
    }
  ];

  featuredPost: BlogPost | null = null;
  otherPosts: BlogPost[] = [];
  @ViewChild('otherPostsContainer') otherPostsContainer!: ElementRef;

  openPost(post: BlogPost): void {
    // Open the GitHub markdown file in a new tab
    const fullUrl = `${post.githubUrl}/blob/main/${post.markdownFile}`;
    window.open(fullUrl, '_blank');
  }

  scrollUp(): void {
    this.otherPostsContainer.nativeElement.scrollBy({
      top: -200,
      behavior: 'smooth'
    });
  }

  scrollDown(): void {
    this.otherPostsContainer.nativeElement.scrollBy({
      top: 200,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
    // Sort posts by date (newest first)
    this.blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    // Set featured post as the most recent, others as the rest
    if (this.blogPosts.length > 0) {
      this.featuredPost = this.blogPosts[0];
      this.otherPosts = this.blogPosts.slice(1);
    }
  }
}
