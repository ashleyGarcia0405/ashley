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
    date: 'Jun 14, 2026',
    content: 'Just starting. Deciding between an ML Systems track (GPU internals, distributed training, transformer optimization) and an RL track (MDPs, PPO, RLHF, \n' +
      '         -reward modeling). Both paths converge on understanding how AI behavior is trained and shaped. Leaning RL.'
  };

  enterHub() {
    this.router.navigate(['/research']);
  }
}
