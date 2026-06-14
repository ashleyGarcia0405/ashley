import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface LogEntry {
  date: string;
  content: string;
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

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent {
  constructor(private router: Router) {}

  coursework = [
    'Large Language Models',
    'Artificial Intelligence',
    'Statistical Inference & Probability Theory',
    'Honors Statistical Machine Learning',
  ];

  logEntries: LogEntry[] = [
    {
      date: 'Jun 14, 2026',
      content: 'Just starting. Deciding between two tracks — ML Systems & Performance (GPU internals, distributed training, transformer optimization) or Reinforcement Learning (MDPs, PPO, RLHF, reward modeling, scalable oversight). Both are structured around eventually understanding how alignment training actually works. The RL path goes closer to the theory I care most about. Starting with backprop fundamentals this week regardless of track — both require it.'
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

  goHome() {
    this.router.navigate(['/']);
  }
}