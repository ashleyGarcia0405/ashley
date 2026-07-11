import { Type } from '@angular/core';
import { Routes } from '@angular/router';
import { BLOG_POSTS } from '../data/blog-posts';
import { SITE_NAME } from '../data/site-meta';

const BLOG_POST_LOADERS: Record<string, () => Promise<Type<unknown>>> = {
  'ai-os': () =>
    import('../components/blog/posts/ai-os/ai-os.component').then((m) => m.AiOsComponent),
  'hack-jobs': () =>
    import('../components/blog/posts/hack-jobs/hack-jobs.component').then((m) => m.HackJobsComponent),
  'setup-gap': () =>
    import('../components/blog/posts/setup-gap/setup-gap.component').then((m) => m.SetupGapComponent),
  'new-git': () =>
    import('../components/blog/posts/new-git/new-git.component').then((m) => m.NewGitComponent),
  'agents-spending-money': () =>
    import('../components/blog/posts/agents-spending-money/agents-spending-money.component').then(
      (m) => m.AgentsSpendingMoneyComponent
    ),
  'shape-of-pressure': () =>
    import('../components/blog/posts/shape-of-pressure/shape-of-pressure.component').then(
      (m) => m.ShapeOfPressureComponent
    ),
  'sound-of-trim': () =>
    import('../components/blog/posts/sound-of-trim/sound-of-trim.component').then(
      (m) => m.SoundOfTrimComponent
    ),
  wemu: () =>
    import('../components/blog/posts/wemu/wemu.component').then((m) => m.WemuComponent),
};

export const blogPostRoutes: Routes = BLOG_POSTS.map((post) => ({
  path: `blog/${post.slug}`,
  loadComponent: BLOG_POST_LOADERS[post.slug],
  data: {
    seo: {
      title: `${post.title} — ${SITE_NAME}`,
      description: post.summary,
    },
  },
}));
