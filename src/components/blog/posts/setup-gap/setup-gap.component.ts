import { Component } from '@angular/core';
import { BlogPostLayoutComponent } from '../../blog-post-layout/blog-post-layout.component';

@Component({
  selector: 'app-blog-setup-gap',
  standalone: true,
  imports: [BlogPostLayoutComponent],
  template: `
    <app-blog-post-layout
      title="Why Setting Up a Dev Environment Still Sucks"
      date="Feb 2, 2026"
      [readingTime]="6"
    >
      <p>A while back, a pre-med friend reached out to me for help setting up a research workstation — some work involving processing genetics data, I think lol. We hopped on a Zoom call and she shared her screen.</p>

      <p>She didn't have anything set up. No IDE, no Git, no package manager. When I told her to open the terminal, she didn't know what I meant. This was, in retrospect, the first sign that the help she needed was not the help I had assumed she needed.</p>

      <p>So we started from the beginning. First, an IDE — we went with PyCharm. Once it was installed, there was no Python interpreter configured, so we set one up. Then pip install failed, because pip wasn't recognized, which traced back to Python never having been added to PATH. Once that was sorted, we had to figure out which packages she actually needed for her work — something like Biopython, pandas, numpy. Then the same problem again, one level up: managing different Python versions across different projects, which she had no framework for, because she'd never needed isolated environments before. By the time we got her to a working setup, I'd lost track of how many individually small problems we'd worked through. Each one, on its own, was trivial. Together, they were tedious enough that I understood, for the first time, why someone might simply give up before reaching a working machine.</p>

      <p>Later that evening, when she tried running a script to convert the file types, her computer would take two hours per file and then freeze, requiring a hard restart. I found out she had 4GB of RAM on an older Intel chip. We had hit a hardware ceiling, not something either of us could troubleshoot our way out of. Luckily she had some research funding, and I told her to ask her professor whether they could budget in a new laptop to actually do the work her data required.</p>

      <p>What's worth examining here is not the list of problems but what made each one resolvable only after the fact. A missing interpreter, an unset PATH variable, an unconfigured environment — none of these are difficult once correctly identified. The fix, in every case, took seconds. What took the better part of an evening was identifying what the fix even was.</p>

      <h2>"Technical Skill"</h2>

      <p>There are two separate competencies bound up in something we casually call "technical skill." The first is procedural — knowing the steps to resolve a known problem. The second is diagnostic — recognizing which category a symptom belongs to. An error like <code>'pip' is not recognized as an internal or external command</code> does not, on its face, point to PATH configuration. The connection between the symptom and its cause is not contained in the error message itself; it has to be supplied externally by someone who has already seen this particular failure before and built the association.</p>

      <p>Is this distinction actually doing work, or is it just a more academic way of saying "she didn't know computers"? I think it's doing real work, because it changes where you locate the deficiency. Consider the sequence above again, but sorted by which competency each step actually demanded. Installing PyCharm was almost purely procedural: download, run the installer, accept the defaults. The diagnostic burden was close to zero, because the task arrived already correctly named. Configuring the interpreter required a small diagnostic leap: recognizing that the IDE's refusal to run code wasn't a bug in the IDE but the absence of a precondition the IDE had assumed was already met. The PATH/pip failure demanded a much larger leap: an error string with no surface connection to its cause, resolvable only by having encountered the pattern before, or knowing what to search for when the error text itself withholds the relevant word. Choosing between Biopython, pandas, and numpy required something closer to domain judgment — knowing which library category maps onto which kind of data work. And anticipating the Python-version conflict across projects required recognizing a problem that hadn't happened yet.</p>

      <p>Each of these sits at a different point along the same axis — how much of the task is "follow the instructions" versus "supply the instructions yourself, from a category you have to recognize unaided" — and it is not a coincidence that this is also, in order, the sequence in which the steps became harder for me to explain over the call. The procedural ones I could narrate in a sentence. The diagnostic ones I struggled to explain at all, because what I actually knew wasn't a fact I could hand over — it was closer to a reflex, assembled from years of having seen the same shapes of failure before.</p>

      <h2>What CS teaches (and what it doesn't)</h2>

      <p>This is, I'd argue, the actual content of "knowing how to use computers" in the sense that matters for a CS education, and it is almost entirely absent from setup documentation specifically, even though it is taught — just not there. A CS curriculum does teach the diagnostic layer when professors give you debugging procedures, TAs walk you through tracing a bug to its source, assignments are structured precisely so that you have to practice locating the cause of a failure rather than just applying a known fix. The teaching is real. It's just narrow in scope, confined to the kinds of failures a course is designed to produce, and it doesn't generalize automatically to failures outside that scope — like a missing PATH variable or an unconfigured interpreter, which no course covers because they aren't really "computer science" so much as the administrative overhead that sits in front of it.</p>

      <p>Setup guides, meanwhile, are written almost entirely for the procedural end of the axis. Nobody writes the diagnostic equivalent for setup because setup failures are too heterogeneous and too tied to a particular machine's history to formalize the way a debugging assignment can be. So the diagnostic competence a CS student eventually has for this kind of problem isn't really taught by any course either. It's closer to a byproduct: years of hitting these setup failures personally, outside of any structured assignment, with no TA, until the pattern recognition that courses deliberately built for debugging gets reapplied, informally, to a different category of failure that nobody ever explicitly trained.</p>

      <p>Existing tooling does not really address this gap, because it isn't designed to. Documentation, package managers, even well-designed IDEs all assume you already know which tool you're missing — the discovery problem is treated as solved before the tool is even opened. Onboarding flows answer "I know what I need, help me get it," not "I don't know what category of thing I'm even looking for." The discovery of need, rather than execution of install, goes largely unaddressed, because it's hard to write documentation for a question someone doesn't yet know how to ask.</p>

      <h2>Autostack</h2>

      <p>This was the problem I was circling when I built Autostack: a tool meant to start from "what are you trying to build." It would scan a local environment, infer what was missing relative to the stated goal, and generate either step-by-step instructions or a script to close the gap. I built it about two years ago, a bit before Claude Code existed publicly — an early, fairly scrappy attempt at using AI to handle the diagnostic layer on someone's behalf, rather than just the procedural one.</p>

      <p>What's changed since then is worth its own discussion.</p>
    </app-blog-post-layout>
  `
})
export class SetupGapComponent {}
