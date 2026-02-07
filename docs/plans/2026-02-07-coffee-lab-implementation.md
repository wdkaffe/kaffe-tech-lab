# Coffee Lab Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a "Kaffe Tech" minimalist Bento Grid website for Coffee Lab, showcasing live brew status and KaffePro's identity.

**Architecture:** Next.js 15 (App Router) with Tailwind CSS for layout and Framer Motion for coffee-inspired animations. Data will be driven by a simulated Brew API.

**Tech Stack:** Next.js, Tailwind CSS, Framer Motion, Lucide React (icons), Vercel.

---

### Task 1: Project Initialization & Scaffold

**Files:**
- Create: `package.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`
- Create: `app/layout.tsx`, `app/page.tsx`
- Test: `tests/smoke-test.spec.ts`

**Step 1: Create a basic package.json**
**Step 2: Install core dependencies (Next.js, React, Tailwind, Framer Motion)**
**Step 3: Write a smoke test to verify Next.js boots**
**Step 4: Implement minimal "Hello Coffee Lab" page**
**Step 5: Run test to verify it passes**
**Step 6: Commit**

### Task 2: Design System & Tailwind Setup

**Files:**
- Modify: `tailwind.config.ts`
- Create: `app/globals.css`
- Test: `tests/design-tokens.spec.ts`

**Step 1: Inject our custom color palette (`#F9F9F9`, `#00D1FF`, `#3E2723`)**
**Step 2: Set up typography (Inter/Noto Sans JP Vibe)**
**Step 3: Commit**

### Task 3: The Bento Grid Core Layout

**Files:**
- Create: `components/BentoGrid.tsx`, `components/BentoItem.tsx`
- Modify: `app/page.tsx`

**Step 1: Implement the responsive grid container**
**Step 2: Create the placeholder items for C-position (Brew Status), Barista Console, and Snippets**
**Step 3: Commit**

### Task 4: Live Brew Status Component (C-Position)

**Files:**
- Create: `components/LiveBrewStatus.tsx`
- Create: `hooks/useBrewData.ts`

**Step 1: Implement the real-time progress bar animation**
**Step 2: Add JSON-style data display for parameters**
**Step 3: Commit**

---
