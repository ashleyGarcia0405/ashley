import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { PAGE_SEO } from '../data/site-meta';
import { blogPostRoutes } from './blog-routes';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { seo: PAGE_SEO[''] } },
  {
    path: 'about',
    loadComponent: () => import('../components/about/about.component').then((m) => m.AboutComponent),
    data: { seo: PAGE_SEO['about'] },
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('../components/projects/projects.component').then((m) => m.ProjectsComponent),
    data: { seo: PAGE_SEO['projects'] },
  },
  {
    path: 'blog',
    loadComponent: () => import('../components/blog/blog.component').then((m) => m.BlogComponent),
    data: { seo: PAGE_SEO['blog'] },
  },
  ...blogPostRoutes,
  {
    path: 'contact',
    loadComponent: () =>
      import('../components/contact/contact.component').then((m) => m.ContactComponent),
    data: { seo: PAGE_SEO['contact'] },
  },
  {
    path: 'research',
    loadComponent: () =>
      import('../components/research/research.component').then((m) => m.ResearchComponent),
    data: { seo: PAGE_SEO['research'] },
  },
  { path: '**', redirectTo: '' },
];
