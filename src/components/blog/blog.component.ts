import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  readingTime: number;
  slug: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  constructor(private router: Router) {}

  blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'What Do People Mean When They Say "AI OS"?',
      summary: 'I keep hearing "AI OS" and it feels hand-wavy. This post is me trying to pin it down: what would an AI layer actually own? State? Memory? Permissions? Execution? Inspired by CLI tools, agent workflows, and the question of how much control you should ever hand off.',
      date: 'Feb 2, 2026',
      readingTime: 10,
      slug: 'ai-os'
    },
    {
      id: '2',
      title: 'In Defense of the Hack Job',
      summary: `A case for messy, duct-taped projects. Some of the most useful things I've built were objectively a mess—but they taught me how APIs break, how systems fail, and how fast you can learn when you don't overthink structure too early. Clean code is nice. Learning fast is nicer.`,
      date: 'Feb 2, 2026',
      readingTime: 7,
      slug: 'hack-jobs'
    },
    {
      id: '3',
      title: 'Why Setting Up a Dev Environment Still Sucks',
      summary: `Even now, getting from "blank laptop" to "working system" is way harder than it should be. Here I talk about the practical knowledge CS students accumulate over years and how tooling still assumes you already know what you're doing. Some thoughts from building AutoStack and watching non-CS friends struggle through setup.`,
      date: 'Feb 2, 2026',
      readingTime: 15,
      slug: 'dev-ergonomics'
    },
    {
      id: '4',
      title: 'Version Control for Agentic Workflows',
      summary: 'Version control assumes a human writing deterministic code. That breaks down fast once agents start generating, editing, and refactoring constantly. Current tools feel wrong for agentic workflows and here I believe there are better primitives.',
      date: 'Feb 2, 2026',
      readingTime: 30,
      slug: 'new-git'
    },
    {
      id: '5',
      title: 'Product Before Code',
      summary: 'Building is cheap now. Thinking isn\'t. It\'s so easy to jump into code but often that skips the hard part of identifying the problem. Some reflections on hackathons, PM work, and why "just ship it" isn\'t always the flex it sounds like.',
      date: 'Feb 2, 2026',
      readingTime: 8,
      slug: 'product-before-code'
    },
    {
      id: '6',
      title: 'AI as Leverage, Not a Crutch',
      summary: `How I use AI to speed up the dumb, repetitive parts of building without outsourcing actual thinking. Mostly pulled from building with AI before the tooling was polished and realizing speed only matters if you know what you're aiming at.`,
      date: 'Feb 2, 2026',
      readingTime: 10,
      slug: 'ai-leverage'
    },
    {id: '8',
      title: 'The Shape of Pressure',
      summary: 'Dirty air, linear interpolation, and one known oopsie where the boats briefly sail head-to-wind: a breakdown of The Shape of Pressure, a generative animation running on an ESP32 TTGO T-Display. Three boats, one squeeze, 135 pixels of vertical resolution to say something real about team racing geometry.',
      date: 'Mar 2, 2026',
      readingTime: 5,
      slug: 'shape-of-pressure'
    },
    {
      id: '7',
      title: 'Letting Software Spend Your Money',
      summary: 'We\'re getting really close to letting agents actually buy things for us. That\'s exciting and also kind of terrifying. This post is me thinking through what suddenly matters once software can spend real money: identity, permissions, limits, and what happens when something goes wrong.',
      date: 'Feb 2, 2026',
      readingTime: 4,
      slug: 'agents-spending-money'
    }
  ];

  featuredPost: BlogPost | null = null;
  otherPosts: BlogPost[] = [];
  @ViewChild('otherPostsContainer') otherPostsContainer!: ElementRef;

  openPost(post: BlogPost): void {
    this.router.navigate(['/blog', post.slug]);
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
    this.blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    if (this.blogPosts.length > 0) {
      this.featuredPost = this.blogPosts[0];
      this.otherPosts = this.blogPosts.slice(1);
    }
  }
}
