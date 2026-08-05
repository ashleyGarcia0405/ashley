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
    date: 'Aug 4, 2026',
    content: 'Read Hamming\'s "You and Your Research" — his talk on what actually separates people who do first-class work from everyone else. The bit on courage got me: once you believe you can do important problems, you can, and if you think you can\'t, you almost surely won\'t.'
  };

  enterHub() {
    this.router.navigate(['/research']);
  }
}
