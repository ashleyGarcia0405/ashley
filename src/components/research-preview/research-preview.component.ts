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

  currentFocus = 'Reading more into AI policy.';

  latestLog = {
    date: 'Aug 12, 2026',
    content: 'Read Hassabis\'s proposal for a Frontier AI Standards Body, a FINRA-style public-private SRO that gates a \'Frontier-class\' label behind capability evals. Liked that it\'s an actual mechanism instead of just a warning, tying prestige to responsible behavior. Not sure what it adds over CAISI/AISIC though, need to dig into what those already do before I can tell if this is new or repackaged.'
  };

  enterHub() {
    this.router.navigate(['/research']);
  }
}
