# Argument Atlas IELTS

Argument Atlas IELTS is a lightweight web app for IELTS Task 2 brainstorming.
It helps learners turn a prompt into a clearer argument map before they start
writing.

## What the current version does

- Detects the likely IELTS Task 2 question type
- Generates supporting arguments
- Generates opposing arguments
- Suggests compromise or nuanced thesis angles
- Offers example directions
- Flags common off-topic traps
- Recommends a thesis direction based on the task type and chosen focus mode
- Suggests a body paragraph path so learners can move from brainstorming to outline

## Why this project exists

Many IELTS learners do not struggle with grammar first. They struggle earlier:
they cannot quickly see both sides of an argument, they repeat the same idea,
or they drift away from the exact task question. This project focuses on that
planning gap.

## Run locally

This first version has no build step and no dependency installation.

1. Open `/Users/allen.chu/Desktop/Allenchu/index.html` in a browser.
2. Paste an IELTS Task 2 prompt.
3. Click `Generate argument map`.

## Current positioning

This is intentionally not a full IELTS platform. It is a focused planning tool
for one narrow but painful part of IELTS Writing Task 2:

- finding both sides of an argument quickly
- choosing a thesis direction
- spotting where essays drift off-task
- turning raw ideas into a usable body paragraph plan

## Next ideas

- Add more topic libraries for environment, health, crime, culture, and media
- Support more precise handling for problem-solution and two-part questions
- Let users export Markdown or copy a full essay plan
- Add a thesis sentence generator and topic sentence generator
- Add sample thesis statements and paragraph structures
- Connect an AI model for more prompt-specific argument generation

## Tech

- HTML
- CSS
- Vanilla JavaScript
