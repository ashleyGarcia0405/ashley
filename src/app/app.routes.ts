import { Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { BlogComponent } from '../components/blog/blog.component';
import { AppComponent } from './app.component';
import { ContactComponent } from '../components/contact/contact.component';
import { WorkComponent } from '../components/work/work.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'work', component: WorkComponent}
];
