# The Pattern Issue — AI Workflow

## Purpose

Different AI tools have different jobs.

The goal is to avoid scattered chats, missing context, and conflicting information.

Obsidian is the permanent source of truth.

Important decisions must be written here instead of existing only inside an AI chat.

## ChatGPT — Creative Director and Launch Manager

Use ChatGPT for:

- Brand direction
- Website planning
- Editorial direction
- Issue layout
- Page design
- Visual hierarchy
- Dress and collection names
- Illustrations
- Photography direction
- Customer experience
- Product strategy
- Launch planning
- Content strategy
- Organizing priorities
- Deciding what to do next

ChatGPT should first help define exactly what needs to be created.

## Claude — Pattern and Project Engineer

Use Claude for:

- Maintaining the long crochet pattern
- Pattern revisions
- Stitch counts
- Construction documentation
- Long structured documents
- Website implementation
- Turning a finalized design brief into working website code

The existing Claude pattern chat should be kept because it contains the most detailed pattern context and the current pattern artifact.

Do not restart that chat unless it begins losing important information.

Before moving to a new pattern chat, ask Claude to create a complete handoff containing:

- Finalized pattern
- Measurements
- Construction details
- Stitch counts
- Revisions
- Unresolved questions
- Tutorial-video structure
- Important decisions

## Codex — Coding Specialist

Codex should not independently invent the website design.

Use Codex when:

- A specific coding problem needs to be solved
- The website has a bug
- A technical integration is not working
- Checkout, downloads, or another backend function needs help
- Claude has already created the main project and needs technical assistance

Claude and Codex can work on the same website project even though they are different platforms.

The same project files must be provided to whichever tool is working on them.

For the first launch, keep the process simple:

1. Plan the website with ChatGPT.
2. Give Claude the approved website brief and visual direction.
3. Let Claude create the main website.
4. Use Codex only for specific technical problems if needed.

## Required Context Before AI Work

Before asking an AI to create anything, provide the relevant Obsidian notes.

Examples:

Website work:
- 05 - Brand
- 01 - Website
- Relevant photos and visual references

Issue design:
- 05 - Brand
- 06 - Issue Design
- Finalized pattern chapter
- Garment photos
- Tutorial information

Content:
- 05 - Brand
- 03 - Content
- Current launch stage
- Available photos and videos

The AI should not receive the entire vault when only a few notes are relevant.

## Accuracy Rule

AI must never invent:

- Stitch counts
- Construction steps
- Measurements
- Garment details
- Tutorial content
- Product features

When information is missing, it must ask or clearly mark the missing information.

Visual mockups are not considered technically accurate unless checked against the finalized pattern and actual garment.

## Main Rule

Define with ChatGPT.

Document in Obsidian.

Build with Claude.

Use Codex when technical help is needed.
