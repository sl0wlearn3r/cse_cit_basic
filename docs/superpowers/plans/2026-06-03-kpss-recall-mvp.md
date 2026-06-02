# KPSS Recall MVP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static React MVP for "KPSS Vatandaşlık Hafıza Meclisi" with a polished parliament-inspired recall game interface.

**Architecture:** Use a Vite + React + TypeScript app with local deck data, pure scheduler/store helpers, and componentized UI regions. The chamber background is recreated with code-native CSS and all Turkish UI copy is rendered as accessible HTML text.

**Tech Stack:** React, TypeScript, Vite, Vitest, CSS custom properties, localStorage.

---

### Task 1: Scaffold And Tests

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `src/state/scheduler.test.ts`
- Create: `src/state/reviewStore.test.ts`

- [x] **Step 1: Define the React/Vite project scripts and compiler config.**
- [x] **Step 2: Write failing scheduler tests for the four review ratings.**
- [x] **Step 3: Write failing progress-store tests for due cards, reviews, streaks, and revived data.**

### Task 2: Core Types And Scheduling

**Files:**
- Create: `src/types/content.ts`
- Create: `src/types/review.ts`
- Create: `src/state/scheduler.ts`
- Create: `src/state/reviewStore.ts`

- [x] **Step 1: Add the requested `RecallCard` shape and review progress types.**
- [x] **Step 2: Implement the lightweight spaced-repetition scheduler.**
- [x] **Step 3: Implement progress initialization, revival, due-card selection, localStorage helpers, and review recording.**
- [x] **Step 4: Run `npm test` and verify scheduler/store tests pass.**

### Task 3: Starter Deck

**Files:**
- Create: `src/content/starterDeck.ts`

- [x] **Step 1: Add at least 15 Turkish customer-facing recall cards.**
- [x] **Step 2: Mark every card with `needsReviewBeforePublish: true`.**
- [x] **Step 3: Keep prompts short and focused on commonly confused facts.**

### Task 4: App UI And Interaction

**Files:**
- Create: `src/main.tsx`
- Create: `src/app/App.tsx`
- Create: `src/components/ParliamentScene.tsx`
- Create: `src/components/RecallCard.tsx`
- Create: `src/components/ReviewButtons.tsx`
- Create: `src/components/DeckSelector.tsx`
- Create: `src/components/ProgressPanel.tsx`
- Create: `src/components/MnemonicPanel.tsx`
- Create: `src/styles.css`

- [x] **Step 1: Compose the left rail, chamber scene, central recall card, and right rail.**
- [x] **Step 2: Implement hidden-answer and revealed-answer states.**
- [x] **Step 3: Wire review buttons to local progress updates.**
- [x] **Step 4: Render the completed-today state when no cards are due.**
- [x] **Step 5: Add responsive CSS for desktop and mobile without text overlap.**

### Task 5: Verification

**Files:**
- Modify: files created above as needed.

- [x] **Step 1: Run `npm test`.**
- [x] **Step 2: Run `npm run build`.**
- [x] **Step 3: Start the Vite dev server and inspect the UI in browser at desktop and mobile sizes.**
- [x] **Step 4: Compare against `assets/kpss-recall-mvp-screenshot.png` for layout, palette, hierarchy, and readability.**
