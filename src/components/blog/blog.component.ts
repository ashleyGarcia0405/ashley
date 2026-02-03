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
      title: 'What Do People Mean When They Say “AI OS”?',
      summary: 'I keep hearing “AI OS” and it feels hand-wavy. This post is me trying to pin it down: what would an AI layer actually own? State? Memory? Permissions? Execution? Inspired by CLI tools, agent workflows, and the question of how much control you should ever hand off.',
      date: 'Feb 2, 2026',
      readingTime: 10,
      githubUrl: '#',
      markdownFile: 'ai-os.md'
    },
    {
      id: '2',
      title: 'In Defense of the Hack Job',
      summary: 'A case for messy, duct-taped projects. Some of the most useful things I’ve built were objectively a mess—but they taught me how APIs break, how systems fail, and how fast you can learn when you don’t overthink structure too early. Clean code is nice. Learning fast is nicer.',
      date: 'Feb 2, 2026',
      readingTime: 7,
      githubUrl: '#',
      markdownFile: 'hack-jobs.md'
    },
    {
      id: '3',
      title: 'Why Setting Up a Dev Environment Still Sucks',
      summary: 'Even now, getting from “blank laptop” to “working system” is way harder than it should be. This is about the hidden knowledge CS students accumulate over years and how tooling still assumes you already know what you’re doing. Some thoughts from building AutoStack and watching non-CS friends struggle through setup.',
      date: 'Feb 2, 2026',
      readingTime: 15,
      githubUrl: '#',
      markdownFile: 'dev-ergonomics.md'
    },
    {
      id: '4',
      title: 'Version Control for Agentic Workflows',
      summary: 'Version control assumes a human writing deterministic code. That breaks down fast once agents start generating, editing, and refactoring constantly. Some thoughts on why current tools feel wrong for agentic workflows and what better primitives might look like.',
      date: 'Feb 2, 2026',
      readingTime: 30,
      githubUrl: '#',
      markdownFile: 'new-git.md'
    },
    {
      id: '5',
      title: 'Product Before Code',
      summary: 'Building is cheap now. Thinking isn’t. This is about how easy it is to jump straight into code—and how often that skips the hard part of identifying the problem. Some reflections on hackathons, PM work, and why “just ship it” isn’t always the flex it sounds like.',
      date: 'Feb 2, 2026',
      readingTime: 8,
      githubUrl: '#',
      markdownFile: 'product-before-code.md'
    },
    {
      id: '6',
      title: 'AI as Leverage, Not a Crutch',
      summary: 'Thoughts on using AI to speed up the dumb, repetitive parts of building without outsourcing actual thinking. This is about where AI helps (glue code, UI, data labeling) and where it absolutely shouldn’t (architecture, tradeoffs, product decisions). Mostly pulled from building with AI before the tooling was polished and realizing speed only matters if you know what you’re aiming at.',
      date: 'Feb 2, 2026',
      readingTime: 10,
      githubUrl: '#',
      markdownFile: 'ai-leverage.md'
    },
    {
      id: '7',
      title: 'Letting Software Spend Your Money',
      summary: 'We’re getting really close to letting agents actually buy things for us. That’s exciting and also kind of terrifying. This post is me thinking through what suddenly matters once software can spend real money: identity, permissions, limits, and what happens when something goes wrong. If an agent screws up, who eats the cost? The user, the platform, or nobody because we didn’t think about it early enough?',
      date: 'Feb 2, 2026',
      readingTime: 4,
      githubUrl: '#',
      markdownFile: 'agents-spending-money.md'
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
