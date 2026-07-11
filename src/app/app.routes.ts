import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', loadComponent: () => import('../components/about/about.component').then(m => m.AboutComponent) },
  { path: 'projects', loadComponent: () => import('../components/projects/projects.component').then(m => m.ProjectsComponent) },
  { path: 'blog', loadComponent: () => import('../components/blog/blog.component').then(m => m.BlogComponent) },
  { path: 'blog/ai-os', loadComponent: () => import('../components/blog/posts/ai-os/ai-os.component').then(m => m.AiOsComponent) },
  { path: 'blog/hack-jobs', loadComponent: () => import('../components/blog/posts/hack-jobs/hack-jobs.component').then(m => m.HackJobsComponent) },
  { path: 'blog/setup-gap', loadComponent: () => import('../components/blog/posts/setup-gap/setup-gap.component').then(m => m.SetupGapComponent) },
  { path: 'blog/new-git', loadComponent: () => import('../components/blog/posts/new-git/new-git.component').then(m => m.NewGitComponent) },
  { path: 'blog/agents-spending-money', loadComponent: () => import('../components/blog/posts/agents-spending-money/agents-spending-money.component').then(m => m.AgentsSpendingMoneyComponent) },
  { path: 'blog/shape-of-pressure', loadComponent: () => import('../components/blog/posts/shape-of-pressure/shape-of-pressure.component').then(m => m.ShapeOfPressureComponent) },
  { path: 'blog/sound-of-trim', loadComponent: () => import('../components/blog/posts/sound-of-trim/sound-of-trim.component').then(m => m.SoundOfTrimComponent) },
  { path: 'blog/wemu', loadComponent: () => import('../components/blog/posts/wemu/wemu.component').then(m => m.WemuComponent) },
  { path: 'contact', loadComponent: () => import('../components/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'research', loadComponent: () => import('../components/research/research.component').then(m => m.ResearchComponent) },
  { path: '**', redirectTo: '' }
];
