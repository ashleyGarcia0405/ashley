import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @ViewChild('projectsContainer') projectsContainer!: ElementRef;

  scrollLeft() {
    this.projectsContainer.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.projectsContainer.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }
}
