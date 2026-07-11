export const SITE_NAME = 'Ashley Garcia';
export const SITE_URL = 'https://ashleygarcia.com';

export const DEFAULT_SEO = {
  title: `${SITE_NAME} — workspace`,
  description:
    'I build tools and write about what I\'m figuring out — mostly AI systems, developer tooling, and interactive experiments.',
  image: '/logo.png',
};

export interface PageSeo {
  title: string;
  description: string;
  image?: string;
}

export const PAGE_SEO: Record<string, PageSeo> = {
  '': DEFAULT_SEO,
  about: {
    title: `About — ${SITE_NAME}`,
    description:
      'I write to figure things out. Posting here keeps me honest — otherwise these notes just sit in a doc somewhere and never get finished.',
  },
  projects: {
    title: `Projects — ${SITE_NAME}`,
    description:
      'Tools and systems I\'m building — AI pipelines, developer tooling, and interactive experiments.',
  },
  research: {
    title: `Logbook — ${SITE_NAME}`,
    description: 'Reading notes and work in progress.',
  },
  blog: {
    title: `Blog — ${SITE_NAME}`,
    description: 'Essays and notes.',
  },
  contact: {
    title: `Contact — ${SITE_NAME}`,
    description: 'Get in touch with Ashley Garcia.',
  },
};
