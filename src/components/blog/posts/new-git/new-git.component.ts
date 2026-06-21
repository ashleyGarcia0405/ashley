import { Component } from '@angular/core';
import { BlogPostLayoutComponent } from '../../blog-post-layout/blog-post-layout.component';

@Component({
  selector: 'app-blog-new-git',
  standalone: true,
  imports: [BlogPostLayoutComponent],
  template: `
    <app-blog-post-layout
      title="Version Control for Agentic Workflows"
      date="Feb 2, 2026"
      [readingTime]="30"
    >
      <p><em>Note: This is more of a research brainstorm — I was exploring this with a couple of friends and will probably revisit it properly at some point.</em></p>

      <p>Startups have raised over $6.7 billion to build autonomous coding agents and multi-agent orchestration frameworks. A piece is missing: how those agents will coordinate changes to shared codebases.</p>

      <p>The $6.7 billion invested in 2024 has produced three categories: autonomous coding agents, multi-agent orchestration frameworks, and AI-powered development environments. They're all layered on top of traditional git.</p>

      <p>Traditional git, designed for human developers with social coordination, faces critical mismatches with agent workflows — semantic understanding gaps and merge conflict chaos when 10+ agents work simultaneously.</p>

      <h2>What's already being built</h2>

      <h3>Notable papers</h3>
      <ul>
        <li>
          <strong>MetaGPT's "Code = SOP(Team)" framework</strong>, presented at ICLR 2024, simulates entire software companies with specialized agent roles.
          <br><a href="https://www.ibm.com/think/topics/metagpt" target="_blank">IBM overview</a> · <a href="http://github.com/FoundationAgents/MetaGPT" target="_blank">GitHub</a>
        </li>
        <li>
          <strong>SWE-bench</strong>, a benchmark from Princeton that became the standard for evaluating autonomous coding agents. Models initially solved only 1.96% of real GitHub issues.
        </li>
      </ul>

      <h3>Research on semantic understanding and merge conflict resolution</h3>
      <ul>
        <li>
          <strong>MergeBERT</strong> achieved 63–68% accuracy on merge resolution synthesis. <a href="https://dl.acm.org/doi/10.1145/3698038.3698525" target="_blank">Paper</a>
        </li>
        <li>
          Research on class-level code generation shows LLMs perform worse when handling interdependent methods — 76.2% have class-level dependencies — suggesting agents need richer contextual understanding than git's text-based diffs provide. <a href="https://mingwei-liu.github.io/assets/pdf/ICSE2024ClassEval-V2.pdf" target="_blank">Paper (ICSE 2024)</a>
        </li>
      </ul>

      <h3>Deployed solutions</h3>

      <p>Cognition Labs' Devin is deployed at Goldman Sachs, Palantir, and Cisco. It works well autonomously integrating with GitHub — creating branches, committing changes, opening PRs. But it's operating within git's constraints. They recently acquired Windsurf, covering the development environment, but not the version control limitations.</p>

      <p>Replit's Agent 3 comes pretty close too, but it's still using git under the hood.</p>

      <h3>Interesting approaches</h3>

      <ul>
        <li>
          <strong>Neon × Azure AI Agents:</strong> database versioning experiments rather than code versioning. Separate database branches per agent version, allowing isolated testing and clean rollback. Prevents agents from contaminating shared state — but scaled poorly beyond 10 agents and doesn't address code coordination.
        </li>
        <li>
          <strong>Cloudflare's VibeSDK</strong> provides infrastructure for building custom coding platforms but stays agnostic to version control paradigms.
        </li>
      </ul>

      <h2>Where git breaks down</h2>

      <p>Git's architecture fundamentally conflicts with autonomous agent workflows in four ways.</p>

      <p><strong>Semantic understanding gaps.</strong> Git tracks character-level changes in text files while agents need to understand what changed in intent and behavior. When an agent renames a method consistently across 50 files, git reports thousands of line changes — semantically a no-op, but indistinguishable from 50 different behavioral modifications. Without Abstract Syntax Tree (AST) parsing or Language Server Protocol (LSP) integration, agents lack the semantic code understanding that modern IDEs provide humans.</p>

      <p>Martin Fowler's experiments with AI-generated Spring Boot applications found agents added "features we hadn't asked for," bundled into commits that obscured what actually changed. Repository-wide refactoring that took "under an hour" manually with IDE tools required "many hours" for an AI agent using text-based git operations. (<a href="https://github.com/anthropics/claude-code/issues/1315" target="_blank">claude-code #1315</a>)</p>

      <p><strong>Merge conflict chaos.</strong> Conflicts occur at dramatically higher rates when multiple agents work simultaneously. MergeBERT found even state-of-the-art AI achieves only 63–68% accuracy for merge resolution, and agents lack awareness of parallel work. When three agents simultaneously modify authentication logic — one updating the database schema, another the API endpoints, a third the frontend components — git's optimistic concurrency model creates cascading failures.</p>

      <p><strong>Commit granularity mismatch.</strong> Agents generate either massive commits spanning multiple files and concerns (violating atomic commit principles) or dozens of micro-commits for minor fixes during iteration.</p>

      <p><strong>State management complexity.</strong> Git tracks file system state at commit points but has no awareness of agent intentions, goals, reasoning traces, or tool usage history. When agents restart after session limits, they must rebuild understanding from commit messages and code diffs alone — losing crucial context about why decisions were made.</p>

      <h2>What a rethink could look like</h2>

      <p>Git handles persistence and orchestration frameworks handle agent coordination. The interesting question is whether we can re-imagine version control itself — not as a patch on top of git, but as a new primitive.</p>

      <h3>Semantic versioning layer</h3>
      <ul>
        <li><strong>AST-aware commits:</strong> parse code into abstract syntax trees using LSP servers so commits capture intent, not text deltas.</li>
        <li><strong>Semantic diffs:</strong> replace <code>git diff</code> with tree-level comparison. Output like "Refactored login handler: extracted <code>validate_token()</code>".</li>
        <li><strong>Intent-based history:</strong> each commit is an event <code>&#123;intent, agent_id, context_hash&#125;</code>.</li>
      </ul>

      <h3>Multi-dimensional commits</h3>
      <p>Code snapshot + agent configuration (model, prompt, memory state) + toolchain version + execution results (tests, benchmarks, logs) + reasoning trace hash. Checking out a commit reconstructs not just the code, but the cognitive and runtime context that produced it.</p>

      <h3>Coordination primitives</h3>
      <ul>
        <li><strong>Function-level locks:</strong> agents claim specific semantic units (methods, modules).</li>
        <li><strong>Intent dependencies:</strong> "Agent A's DB schema change must merge before Agent B's API."</li>
        <li><strong>Event notifications:</strong> when Agent A commits, others subscribed to affected modules auto-refresh context.</li>
        <li><strong>Conflict semantics:</strong> merge engine distinguishes between compatible and competing intents.</li>
      </ul>

      <h2>Identity, trust, and governance</h2>

      <p>Integrating with standards like MCP identity or Verified AI Agent (RFC 9421): every commit becomes <code>&#123;agent_pubkey, signature, trust_score&#125;</code>. Humans and orgs configure specific rules.</p>

      <p>Track merge success, rollback frequency, and test stability per agent. Display trust scores in UI (e.g., Agent42: 93% merge reliability).</p>

      <p>Configurable oversight modes:</p>
      <ul>
        <li><strong>Autonomous:</strong> agents merge automatically if trust ≥ threshold.</li>
        <li><strong>Hybrid:</strong> PRs routed to reviewer agents first.</li>
        <li><strong>Manual:</strong> human review required on sensitive files.</li>
      </ul>

      <h2>Causal intelligence</h2>

      <p>Every commit links to causes and effects:</p>
      <ul>
        <li>"Commit X introduced latency regression Y."</li>
        <li>"Commit Z fixed behavior introduced by Agent Q."</li>
      </ul>
    </app-blog-post-layout>
  `
})
export class NewGitComponent {}