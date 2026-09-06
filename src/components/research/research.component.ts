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
  ];

  logEntries: LogEntry[] = [
    {
      date: 'Sep 5, 2026',
      content: 'Read papers on robot manipulation data: DROID (Khazatsky et al.), and Data Quality in Imitation Learning (Belkhale et al., NeurIPS 2023). Started taking notes on papers in the same format I use for my Lincoln-Douglas debate briefs, seems like a good structure for presenting information to coworkers too. Getting more interested in spatial intelligence.',
      reading: [
        {
          title: 'DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset - Khazatsky et al.',
          url: 'https://arxiv.org/abs/2403.12945',
          reflection: ''
        },
        {
          title: 'Data Quality in Imitation Learning - Belkhale et al.',
          url: 'https://proceedings.neurips.cc/paper_files/paper/2023/hash/fe692980c5d9732cf153ce27947653a7-Abstract-Conference.html',
          reflection: ''
        }
      ]
    },
    {
      date: 'Sep 2, 2026',
      content: 'RAND\'s rebuttal to the Superintelligence Strategy paper\'s MAIM concept (Mutual Assured AI Malfunction), an AI analog to nuclear MAD where a state\'s bid for AI dominance gets preventively sabotaged by rivals. RAND\'s sharpest point: MAD worked because neither side could execute a first strike and survive retaliation, that mutual helplessness was the whole point. MAIM requires the opposite, the actual capability to locate and disable a rival\'s AI program, which makes it a first-strike incentive. Also unconvinced states could ever agree on what counts as \'aggressive dominance\' cleanly enough to justify striking, unlike \'a nuke launched.\'',
      reading: [
        {
          title: 'Seeking Stability in the Competition for AI Advantage - RAND',
          url: 'https://www.rand.org/pubs/commentary/2025/03/seeking-stability-in-the-competition-for-ai-advantage.html',
          reflection: ''
        }
      ]
    },
    {
      date: 'Aug 31, 2026',
      content: 'In the dynamism-vs-stasis frameworks Toner borrows, parts of the AI safety community lean "stasist" that instinctively reach for centralized control, fewer AI projects, nonproliferation, and licensing regimes as solutions (Bostrom\'s Vulnerable World Hypothesis proposes "ubiquitous real-time worldwide surveillance") are the extreme endpoint of that instinct. Toner herself prefers a more dynamist approach: transparency and whistleblower protections, third-party audit ecosystems, open-source, and "defensive acceleration" (racing to build defenses faster than harms).',
      reading: [
        {
          title: 'Zoom In: An Introduction to Circuits - Chris Olah et al.',
          url: 'https://distill.pub/2020/circuits/zoom-in/',
          reflection: ''
        },
        {
          title: 'Dynamism vs. Stasis - Helen Toner',
          url: 'https://helentoner.substack.com/p/dynamism-vs-stasis',
          reflection: ''
        }
      ]
    },
    {
      date: 'Aug 28, 2026',
      content: 'Read Amodei\'s "The Adolescence of Technology." So many good points. Thought this paragraph was interesting: "The AI industry needs a healthier relationship with government—one based on substantive policy engagement rather than political alignment. Our choice to engage on policy substance rather than politics is sometimes read as a tactical error or failure to “read the room” rather than a principled decision, and that framing concerns me. In a healthy democracy, companies should be able to advocate for good policy for its own sake. Related to this, a public backlash against AI is brewing: this could be a corrective, but it’s currently unfocused. Much of it targets issues that aren’t actually problems (like datacenter water usage) and proposes solutions (like datacenter bans or poorly designed wealth taxes) that wouldn’t address the real concerns. The underlying issue that deserves attention is ensuring that AI development remains accountable to the public interest, not captured by any particular political or commercial alliance, and it seems important to focus the public discussion there." I believe people are being short-sighted (perhaps out of fear?) about how fast capabilities are moving, and policy is falling further behind because of it.',
      reading: [
        {
          title: 'Physical AI: The Countdown to Robotics\' ChatGPT Moment - Sapphire Ventures',
          url: 'https://sapphireventures.com/blog/physical-ai-chatgpt-moment/',
          reflection: ''
        },
        {
          title: 'The Urgency of Interpretability - Dario Amodei',
          url: 'https://darioamodei.com/post/the-urgency-of-interpretability',
          reflection: ''
        },
        {
          title: 'The Adolescence of Technology - Dario Amodei',
          url: 'https://darioamodei.com/essay/the-adolescence-of-technology',
          reflection: ''
        },
        {
          title: 'The AI Water Issue is Fake - Andy Masley',
          url: 'https://blog.andymasley.com/p/the-ai-water-issue-is-fake',
          reflection: ''
        }
      ]
    },
    {
      date: 'Aug 25, 2026',
      content: '',
      reading: [
        {
          title: 'Six and a Half Intuitions for KL Divergence',
          url: 'https://www.lesswrong.com/posts/no5jDTut5Byjqb4j5/six-and-a-half-intuitions-for-kl-divergence',
          reflection: ''
        }
      ]
    },
    {
      date: 'Aug 23, 2026',
      content: '',
      reading: [
        {
          title: 'Machines of Loving Grace - Dario Amodei',
          url: 'https://darioamodei.com/essay/machines-of-loving-grace',
          reflection: ''
        },
        {
          title: 'From Words to Worlds: Spatial Intelligence - Fei-Fei Li',
          url: 'https://drfeifei.substack.com/p/from-words-to-worlds-spatial-intelligence',
          reflection: ''
        },
        {
          title: 'The Future Worth Building is Human - Thinking Machines',
          url: 'https://thinkingmachines.ai/blog/the-future-worth-building-is-human/',
          reflection: ''
        }
      ]
    },
    {
      date: 'Aug 21, 2026',
      content: 'Read Cameron Berg\'s essay arguing current evidence puts a (25-35%) probability on frontier models having some form of conscious experience, enough to warrant precaution without certainty. The overattribution-risk section pulled me toward my own interest in AI and legal personhood. Berg lists false-positive costs as wasted resources, reputational backlash, and parasocial attachment to users; the last one\'s the only human-centered cost in the bunch, and I believe it\'s underweighted. There exists a future where companies use AI "interests" as a liability shield, the way corporations already use legal personhood against human interests, minus the assumption that consciousness has to be the origin story. The author makes a note of decoupling legal status from rights, but those statutes are weakly enforced because no one has standing to bring a claim, so status without standing would just relocate the capture problem.',
      reading: [
        {
          title: 'The Evidence for AI Consciousness Today - AI Frontiers',
          url: 'https://ai-frontiers.org/articles/the-evidence-for-ai-consciousness-today',
          reflection: ''
        }
      ]
    },
    {
      date: 'Aug 15, 2026',
      content: 'Read Ege Erdil\'s piece on Moravec\'s paradox, which argues that the gap between the median and the best performers at a task proxies for how little evolutionary optimization it has faced, and therefore how soon AI will automate it. Useful framing for why some tasks feel deceptively easy, though the variance proxy carries more weight than it can hold. His claim that novels, music, and digital art are near-term automation targets seems wrong to me. The median-to-best gap in art is mostly a gap in reception, and art markets are winner-take-all, so he is reading a market structure and calling it an evolutionary fingerprint. High variance can also be a sign of strong selection pressure if the trait is a costly signal. Skeptical of the brain comparison too. The genome bottleneck argument is fine (just information counting), but the FLOP estimates are conventions, and optimization pressure gets estimated from the same variance it is meant to explain.',
      reading: [
        {
          title: 'Moravec\'s paradox and its implications - Ege Erdil',
          url: 'https://epoch.ai/gradient-updates/moravec-s-paradox',
          reflection: ''
        }
      ]
    },
    {
      date: 'Aug 12, 2026',
      content: 'Read Hassabis\'s proposal for a Frontier AI Standards Body, a FINRA-style public-private SRO that gates a \'Frontier-class\' label behind capability evals. Liked that it\'s an actual mechanism, tying prestige to responsible behavior. Not sure what it adds over CAISI/AISIC though, need to dig into what those already do.',
      reading: [
        {
          title: 'A Framework for Frontier AI and the Dawning of a New Age - Demis Hassabis',
          url: 'https://x.com/demishassabis/article/2076957440109625718',
          reflection: 'Refer back to this once I\'ve looked more into what CAISI/AISIC actually do.'
        }
      ]
    },
    {
      date: 'Aug 10, 2026',
      content: 'Read a bit on AI policy, this paper was one of the first ones I read in this area. I was not expecting it to be an institutional critique,I thought it was going to connect technical alignment methods to legal/regulatory levers. Note to self: look more into mechanistic interpretability. While I do think this paper does an decent job in historicizing AI colonial frameworks in terms of breadth, I was disappointed by the lack of vertical rigor.',
      reading: [
        {
          title: 'Decolonial AI: Decolonial Theory as Sociotechnical - Foresight in Artificial Intelligence',
          url: 'https://arxiv.org/abs/2007.04068',
          reflection: ''
        }
      ]
    },
    {
      date: 'Aug 4, 2026',
      content: 'Read Hamming\'s "You and Your Research" — his talk on what separates people who do first-class work from everyone else. I liked his bit on courage - once you believe you can do important problems, you can, and if you think you can\'t, you almost surely won\'t.',
      reading: [
        {
          title: 'You and Your Research — Richard Hamming',
          url: 'https://www.cs.virginia.edu/~robins/YouAndYourResearch.html',
          reflection: '"Luck favors the prepared mind." I also liked: keep your subconscious starved on the one problem so it works on it while you sleep.'
        }
      ]
    },
    {
      date: 'Aug 2, 2026',
      content: 'Finished Empire of AI. Good primer on the history and current state of genai — helped fill in a lot of context I was missing on the current AI space, cool to read about researchers I follow on X lol.',
      reading: [
        {
          title: 'Empire of AI — Karen Hao',
          reflection: 'Good context on the history and current state of genai.'
        }
      ]
    },
    {
      date: 'Jul 31, 2026',
      content: 'Read Jacob Steinhardt\'s "Research as a Stochastic Decision Process." Argues you should order tasks by informativeness per unit time rather than by difficulty, and actively try to disprove your own ideas early instead of hoping they work.',
      reading: [
        {
          title: 'Research as a Stochastic Decision Process — Jacob Steinhardt',
          url: 'https://cs.stanford.edu/~jsteinhardt/ResearchasaStochasticDecisionProcess.html',
          reflection: 'Liked the idea of de-risking cheaply before committing to a full approach.'
        }
      ]
    },
    {
      date: 'Jul 30, 2026',
      content: 'Read a Quanta piece on why scary AI narratives spread. Argues a lot of the "AI develops survival instinct" stories are marketing dressed up as danger. Real autonomy requires something like an "autopoietic," self-maintaining system with something to lose, which current LLMs don\'t have.',
      reading: [
        {
          title: 'Why Do We Tell Ourselves Scary Stories About AI? — Quanta Magazine',
          url: 'https://www.quantamagazine.org/why-do-we-tell-ourselves-scary-stories-about-ai-20260410/',
          reflection: 'The real risks are misinformation and misplaced trust, not emergent malevolence.'
        }
      ]
    },
    {
      date: 'Jul 29, 2026',
      content: 'Read an essay arguing we\'re misdiagnosing AI\'s threat to democracy. Panic about AI disinformation may do more damage than the disinformation itself, since it lets bad actors dismiss real evidence as fake — the "liar\'s dividend."',
      reading: [
        {
          title: 'Misunderstanding AI\'s Democracy Problem — Nathaniel Persily',
          url: 'https://www.digitalistpapers.com/essays/misunderstanding-ais-democracy-problem',
          reflection: 'Panic about AI and disinformation eroding trust in all media may be the bigger threat than the disinformation itself.'
        }
      ]
    },
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
      title: 'DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset',
      authors: 'Khazatsky et al.',
      year: 2024,
      url: 'https://arxiv.org/abs/2403.12945',
      status: 'read',
      tags: ['robotics', 'manipulation', 'datasets']
    },
    {
      title: 'Data Quality in Imitation Learning',
      authors: 'Belkhale et al.',
      year: 2023,
      url: 'https://proceedings.neurips.cc/paper_files/paper/2023/hash/fe692980c5d9732cf153ce27947653a7-Abstract-Conference.html',
      status: 'read',
      tags: ['robotics', 'imitation-learning', 'data-quality']
    },
    {
      title: 'Attention Is All You Need',
      authors: 'Vaswani et al.',
      year: 2017,
      url: 'https://arxiv.org/abs/1706.03762',
      status: 'read',
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
