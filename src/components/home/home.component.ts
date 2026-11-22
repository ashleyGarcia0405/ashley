import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { LabPreviewComponent } from '../lab-preview/lab-preview.component';
import { ResearchPreviewComponent } from '../research-preview/research-preview.component';
import { BlogPreviewComponent } from '../blog-preview/blog-preview.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, AboutComponent, ProjectsComponent, LabPreviewComponent, ResearchPreviewComponent, BlogPreviewComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
