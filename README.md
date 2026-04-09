# Argument Atlas IELTS

Argument Atlas IELTS is a focused planning tool for IELTS Writing Task 2.
Instead of trying to be a full IELTS platform, it helps learners solve one
specific problem first: turning a prompt into a writeable essay plan before
they start drafting.

## Snapshot

![Argument Atlas IELTS demo](./assets/argument-atlas-demo.png)

## Why this project exists

Many IELTS learners do not fail because they lack grammar first. They get stuck
earlier:

- they are not sure what position is safest
- they cannot quickly organise two strong body paragraphs
- they repeat one weak idea in different words
- they drift away from the exact task wording
- they know their opinion, but cannot turn it into a usable thesis

Argument Atlas IELTS is designed around that planning gap.

## Who it is for

- IELTS learners preparing for Writing Task 2
- learners who freeze at the planning stage
- users who want a faster way to move from prompt to outline
- users who need structure and language support before writing full paragraphs

## What the current version does

The current version turns a Task 2 prompt into a structured planning workflow:

- detects the likely IELTS Task 2 question type
- suggests a best position and a thesis direction
- explains why that stance is easier to defend
- provides an essay blueprint for the full response
- gives an introduction builder and thesis sentence suggestions
- gives a conclusion move so the response ends cleanly
- builds paragraph 1 and paragraph 2 separately
- provides example directions and sentence starters
- suggests useful linking language
- flags off-topic risks before the learner starts drafting

## Current workflow

The result area is intentionally split into four writing stages:

1. `Plan`
   Diagnose the task, choose a defendable position, and see the essay blueprint.
2. `Introduction`
   Build a cleaner opening, thesis line, and final conclusion move.
3. `Body`
   Develop paragraph 1 and paragraph 2 with topic sentence, explanation path,
   result, example direction, and sentence starter.
4. `Language`
   Pull useful linking phrases, evidence directions, and off-topic checks.

## Product positioning

This is intentionally not:

- a full IELTS course
- a grammar checker
- a scoring engine
- an essay generator

It is a narrow planning assistant for the moment before writing begins.

## Run locally

This version has no build step and no dependency installation.

1. Open [index.html](/Users/allen.chu/Desktop/Allenchu/argument-atlas-ielts/index.html) in a browser.
2. Paste a full IELTS Task 2 prompt.
3. Click `Build essay plan`.
4. Move through the tabs from planning to body structure and language support.

## Current stack

- HTML
- CSS
- Vanilla JavaScript

## Design principles

- Keep the product narrow and maintainable
- Focus on the pre-writing stage, not full essay generation
- Make outputs immediately usable under exam pressure
- Reduce vague brainstorming and increase structured planning

## Roadmap

Short-term ideas:

- make the output more prompt-specific by refining topic libraries further
- add better handling for problem-solution and two-part questions
- improve topic sentence quality and paragraph development prompts
- let users copy a cleaner exam-ready outline

Longer-term ideas:

- connect an AI model for more prompt-specific planning output
- add stronger examples for IELTS Task 2 sub-types
- support a "safe mode" vs "stronger ideas mode"
- add a lightweight teacher or self-review checklist

## Why this matters for open source

There are many broad English-learning tools, but fewer focused tools for the
very specific planning pain of IELTS Task 2. Argument Atlas IELTS is small on
purpose: it is easier to iterate, easier to maintain, and easier to improve
through repeated open-source updates.
