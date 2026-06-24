import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-research-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './research-preview.component.html',
  styleUrls: ['./research-preview.component.css']
})
export class ResearchPreviewComponent {
  constructor(private router: Router) {}

  currentFocus = 'Backprop fundamentals. Deleting implementations and rewriting them from memory until it sticks.';

  latestLog = {
    date: 'Jun 22, 2026',
    content: 'Reviewed backpropagation fundamentals + undergrad stuff I worked on. Implemented a toy backprop pass from scratch in numpy. Still want to spend more time on vanishing gradients before moving forward.'
  };

  enterHub() {
    this.router.navigate(['/research']);
  }
}
