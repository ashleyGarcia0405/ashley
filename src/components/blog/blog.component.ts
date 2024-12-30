import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  blogPosts = [
    {
      id: '1',
      title: 'Designing My Portfolio',
      summary: 'Planning and designing my personal portfolio.',
      content: 
        'My portfolio will showcase my projects, achievements, and skills in a clean, minimalist design.',
      expanded: false,
    },
    {
      id: '2',
      title: 'Designing My Portfolio',
      summary: 'Planning and designing my personal portfolio.',
      content: 
        'My portfolio will showcase my projects, achievements, and skills in a clean, minimalist design.',
      expanded: false,
    },
    {
      id: '3',
      title: 'Designing My Portfolio',
      summary: 'Planning and designing my personal portfolio.',
      content: 
        'My portfolio will showcase my projects, achievements, and skills in a clean, minimalist design.',
      expanded: false,
    },
  ];

  toggleExpand(post:any) {
    post.expanded = !post.expanded;
  }

  ngOnInit(): void {
    console.log(this.blogPosts); 
  }
}
