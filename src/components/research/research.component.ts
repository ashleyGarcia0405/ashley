import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface ReadingItem {
  title: string;
  url?: string;
  reflection?: string;
}

interface LogEntry {
  date: string;
  content: string;
  summary?: string;
  reading?: ReadingItem[];
}

interface Paper {
  title: string;
  authors: string;
  year: number;
  url: string;
  status: 'read' | 'in-progress' | 'queued';
  notes?: string;
  tags: string[];
}

interface Project {
  title: string;
  description: string;
  url?: string;
  status: 'active' | 'planned' | 'complete';
  tags: string[];
}

interface Concept {
  term: string;
  note: string;
  status: 'queued' | 'active' | 'done';
}

interface Experiment {
  date: string;
  what: string;
  result: string;
}

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent {
  constructor(private router: Router) {}

  openQuestions = [
    'Why do some architectures handle vanishing gradients better than others — is it purely structural or does initialization matter as much?',
    'At what point does understanding the math stop being useful and experimentation takes over?',
    'How do you actually know when a reward model is learning the right thing vs. overfitting to surface patterns?',
  ];

  coursework = [
    'Natural Language Processing',
    'Artificial Intelligence',
    'Statistical Inference & Probability Theory',
    'Honors Statistical Machine Learning',
  ];

  logEntries: LogEntry[] = [
    {
      date: 'Jun 22, 2026',
      content: 'Reviewed a couple of my notes from undergrad on ML. Went through some backpropagation fundamentals. Chain rule clicked again pretty fast. Still want to spend more time on vanishing gradients before moving forward.',
      reading: [
        {
          title: 'Yes you should understand backprop — Karpathy',
          url: 'https://karpathy.medium.com/yes-you-should-understand-backprop-e2f06eab496b',
          reflection: 'Good reminder of why leaky ReLU exists.'
        },
        {
          title: 'Calculus on Computational Graphs: Backpropagation',
          url: 'https://colah.github.io/posts/2015-08-Backprop/',
          reflection: 'I like this illustration of backpropagation.',
        }
      ]
    }
  ];

  papers: Paper[] = [
    {
      title: 'Attention Is All You Need',
      authors: 'Vaswani et al.',
      year: 2017,
      url: 'https://arxiv.org/abs/1706.03762',
      status: 'queued',
      tags: ['transformers', 'foundations']
    },
    // { title: 'Proximal Policy Optimization Algorithms', authors: 'Schulman et al.', year: 2017, url: 'https://arxiv.org/abs/1707.06347', status: 'queued', tags: ['rl', 'policy-gradient'] },
    // { title: 'High-Dimensional Continuous Control Using Generalized Advantage Estimation', authors: 'Schulman et al.', year: 2015, url: 'https://arxiv.org/abs/1506.02438', status: 'queued', tags: ['rl', 'policy-gradient'] },
    // { title: 'Training Language Models to Follow Instructions with Human Feedback', authors: 'Ouyang et al.', year: 2022, url: 'https://arxiv.org/abs/2203.02155', status: 'queued', tags: ['rlhf', 'alignment'] },
    // { title: 'Constitutional AI: Harmlessness from AI Feedback', authors: 'Bai et al.', year: 2022, url: 'https://arxiv.org/abs/2212.08073', status: 'queued', tags: ['alignment', 'rlaif'] },
    // { title: 'Direct Preference Optimization: Your Language Model is Secretly a Reward Model', authors: 'Rafailov et al.', year: 2023, url: 'https://arxiv.org/abs/2305.18290', status: 'queued', tags: ['rlhf', 'alignment'] },
    // { title: 'Scaling Laws for Reward Model Overoptimization', authors: 'Gao et al.', year: 2022, url: 'https://arxiv.org/abs/2210.10760', status: 'queued', tags: ['rlhf', 'alignment', 'reward-modeling'] },
    // { title: "Let's Verify Step by Step", authors: 'Lightman et al.', year: 2023, url: 'https://arxiv.org/abs/2305.20050', status: 'queued', tags: ['alignment', 'reward-modeling'] },
    // { title: 'FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness', authors: 'Dao et al.', year: 2022, url: 'https://arxiv.org/abs/2205.14135', status: 'queued', tags: ['systems', 'transformers'] },
    // { title: 'Scaling Laws for Neural Language Models', authors: 'Kaplan et al.', year: 2020, url: 'https://arxiv.org/abs/2001.08361', status: 'queued', tags: ['scaling', 'systems'] },
    // { title: 'Training Compute-Optimal Large Language Models', authors: 'Hoffmann et al.', year: 2022, url: 'https://arxiv.org/abs/2203.15556', status: 'queued', tags: ['scaling', 'systems'] },
    // { title: 'LoRA: Low-Rank Adaptation of Large Language Models', authors: 'Hu et al.', year: 2021, url: 'https://arxiv.org/abs/2106.09685', status: 'queued', tags: ['systems', 'fine-tuning'] },
    // { title: 'Concrete Problems in AI Safety', authors: 'Amodei et al.', year: 2016, url: 'https://arxiv.org/abs/1606.06565', status: 'queued', tags: ['alignment', 'safety'] },
    // { title: 'Goal Misgeneralization in Deep Reinforcement Learning', authors: 'Langosco et al.', year: 2022, url: 'https://arxiv.org/abs/2105.14111', status: 'queued', tags: ['alignment', 'safety', 'rl'] },
  ];

  projects: Project[] = [];

  concepts: Concept[] = [
    // {
    //   term: 'vanishing gradients',
    //   note: 'I get the mechanism — gradients shrink as they propagate back through layers. Still not fully sure why some architectures are more resilient to it than others.',
    //   status: 'active'
    // },
    // {
    //   term: 'computational graphs',
    //   note: 'The colah post made this click. Every operation is a node, every edge is a dependency. Backprop is just the chain rule over that graph.',
    //   status: 'done'
    // },
  ];

  experiments: Experiment[] = [
    {
      date: 'Jun 22, 2026',
      what: 'Implemented a toy backprop pass from scratch in numpy following the micrograd walkthrough.',
      result: 'ez'
    },
  ];

  get sortedLogEntries(): LogEntry[] {
    return [...this.logEntries].sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
