export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  readingTime: number;
  slug: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'What Do People Mean When They Say "AI OS"?',
    summary: 'I keep hearing "AI OS" and it feels hand-wavy. This post is me trying to pin it down: what would an AI layer actually own? State? Memory? Permissions? Execution? Inspired by CLI tools, agent workflows, and the question of how much control you should ever hand off.',
    date: 'Feb 2, 2026',
    readingTime: 10,
    slug: 'ai-os'
  },
  {
    id: '2',
    title: 'In Defense of the Hack Job',
    summary: `A case for messy, duct-taped projects. Some of the most useful things I've built were objectively a mess—but they taught me how APIs break, how systems fail, and how fast you can learn when you don't overthink structure too early. Clean code is nice. Learning fast is nicer.`,
    date: 'Jan 2, 2026',
    readingTime: 3,
    slug: 'hack-jobs'
  },
  {
    id: '3',
    title: 'Why Setting Up a Dev Environment Still Sucks',
    summary: `Even now, getting from "blank laptop" to "working system" is way harder than it should be. Here I talk about the practical knowledge CS students accumulate over years and how tooling still assumes you already know what you're doing.`,
    date: 'Feb 2, 2026',
    readingTime: 15,
    slug: 'dev-ergonomics'
  },
  {
    id: '4',
    title: 'Version Control for Agentic Workflows',
    summary: 'Version control assumes a human writing deterministic code. That breaks down fast once agents start generating, editing, and refactoring constantly. Current tools feel wrong for agentic workflows and here I believe there are better primitives.',
    date: 'Jan 14, 2026',
    readingTime: 30,
    slug: 'new-git'
  },
  {
    id: '8',
    title: 'The Shape of Pressure',
    summary: 'Dirty air, linear interpolation, and one known oopsie where the boats briefly sail head-to-wind: a breakdown of The Shape of Pressure, a generative animation running on an ESP32 TTGO T-Display.',
    date: 'Mar 2, 2026',
    readingTime: 5,
    slug: 'shape-of-pressure'
  },
  {
    id: '7',
    title: 'Letting Software Spend Your Money',
    summary: 'We\'re getting really close to letting agents actually buy things for us. That\'s exciting and also kind of terrifying. This post is me thinking through what suddenly matters once software can spend real money: identity, permissions, limits, and what happens when something goes wrong.',
    date: 'Feb 2, 2026',
    readingTime: 4,
    slug: 'agents-spending-money'
  },
  {
    id: '9',
    title: 'The Sound of Trim',
    summary: 'A touch-sensitive sailing instrument built on a model boat: five copper tape regions, an ESP32, and a lot of calibration. Each part of the boat controls a different layer of sailing sound—sail flutter, line tension, wind, hull, wake.',
    date: 'April 7, 2026',
    readingTime: 6,
    slug: 'sound-of-trim'
  },
  {
    id: '10',
    title: 'WeMu',
    summary: 'A UWB-based theremin for two pairs of performers. Instead of hand-to-antenna distance, the instrument is the distance between people. Two pairs of dancers, two ranging modules, one shared sound.',
    date: 'June 16, 2026',
    readingTime: 7,
    slug: 'wemu'
  }
];