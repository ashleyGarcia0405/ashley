import { Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { BlogComponent } from '../components/blog/blog.component';
import { AppComponent } from './app.component';
import { ContactComponent } from '../components/contact/contact.component';
import { WorkComponent } from '../components/work/work.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/ai-os', loadComponent: () => import('../components/blog/posts/ai-os/ai-os.component').then(m => m.AiOsComponent) },
  { path: 'blog/hack-jobs', loadComponent: () => import('../components/blog/posts/hack-jobs/hack-jobs.component').then(m => m.HackJobsComponent) },
  { path: 'blog/dev-ergonomics', loadComponent: () => import('../components/blog/posts/dev-ergonomics/dev-ergonomics.component').then(m => m.DevErgonomicsComponent) },
  { path: 'blog/new-git', loadComponent: () => import('../components/blog/posts/new-git/new-git.component').then(m => m.NewGitComponent) },
  { path: 'blog/product-before-code', loadComponent: () => import('../components/blog/posts/product-before-code/product-before-code.component').then(m => m.ProductBeforeCodeComponent) },
  { path: 'blog/ai-leverage', loadComponent: () => import('../components/blog/posts/ai-leverage/ai-leverage.component').then(m => m.AiLeverageComponent) },
  { path: 'blog/agents-spending-money', loadComponent: () => import('../components/blog/posts/agents-spending-money/agents-spending-money.component').then(m => m.AgentsSpendingMoneyComponent) },
  { path: 'blog/shape-of-pressure', loadComponent: () => import('../components/blog/posts/shape-of-pressure/shape-of-pressure.component').then(m => m.ShapeOfPressureComponent) },
  { path: 'contact', component: ContactComponent },
  { path: 'work', component: WorkComponent },
  { path: 'portfolio', component: PortfolioComponent }
];