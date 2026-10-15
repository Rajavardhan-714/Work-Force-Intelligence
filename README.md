# Workforce Intelligence — Autonomous Talent & Capacity Orchestration
> Built for HackAttack 2026 (Web & App Development Track)  
> Stack: **Express + SQLite (better-sqlite3) + React 19 + TypeScript + Vite + Tailwind CSS + Framer Motion + Recharts**

---

## 🌟 Executive Overview
**Workforce Intelligence** is an enterprise workforce planning and talent orchestration platform powered by an **Express + SQLite REST API backend** and an Apple-inspired reactive frontend. It matches employees to high-stakes projects using multi-objective constraints (skills, domain seniority, real-time availability), identifies organizational capability deficits, recommends targeted upskilling curricula, and balances engineering workloads to prevent burnout.

### Key Capabilities & Judging Criteria
- **Backend Architecture & Persistence**: Express REST API backed by embedded SQLite (`better-sqlite3`) with WAL-mode journaling, ACID transactions, atomic rebalancing, and automatic database seeding.
- **Matching Accuracy & Multi-Objective Scoring**: Weighted evaluation combining competency proficiencies (55%), domain experience (25%), and unallocated bandwidth (20%).
- **Team Capability Coverage Bar**: Visualizes aggregate team readiness against project requirements and flags skill deficits in under 5 seconds.
- **Skill Gap Diagnostics & Training Integration**: Automatically connects unfulfilled requirements to curated enterprise curricula.
- **Interactive Workload Rebalancer**: Identifies overloaded (>100%) and underutilized (<50%) staff, proposing AI-directed task reallocations with live before/after diffs and single-click undo.
- **Apple Human Interface Design (WWDC Grade)**: Translucent materials (`backdrop-filter: blur(20px)`), size-specific optical tracking, spring physics, draggable/interruptible drawers with rubber-banding, and high-contrast accessibility.

---

## 🚀 Quick Start & Run Steps

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (Tested on Node v24)
- **Package Manager**: npm, pnpm, or yarn

### 2. Installation & Launch
```bash
# Clone or navigate to the project directory
cd Hackathon

# Install runtime and dev dependencies
npm install

# Start Fullstack Development Environment (API Server + Vite Frontend concurrently)
npm run dev
```

- **Frontend Application**: 👉 **`http://localhost:5173/`**
- **Backend REST API**: 👉 **`http://localhost:3001/api/health`**

You can also start each service independently:
- `npm run server` — Runs the Express + SQLite backend on port 3001
- `npm run dev:client` — Runs the Vite frontend dev server on port 5173

### 3. Backend REST API Endpoints
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Backend status, uptime, and timestamp |
| `GET` | `/api/employees` | List all employees with skill levels & active workloads |
| `GET` | `/api/employees/:id` | Fetch employee by ID |
| `POST` | `/api/employees` | Create a new employee record |
| `PUT` | `/api/employees/:id` | Update employee record |
| `GET` | `/api/projects` | List all tracked enterprise projects |
| `GET` | `/api/projects/:id` | Fetch specific project requirements & members |
| `POST` | `/api/projects` | Create a new project |
| `PUT` | `/api/projects/:id/members` | Assign/update project team member roster |
| `GET` | `/api/skills` | Skill taxonomy catalog |
| `GET` | `/api/courses` | Upskilling course curricula |
| `GET` | `/api/alerts` | Active workforce risks & bottleneck alerts |
| `GET` | `/api/rebalance-suggestions` | AI-generated workload rebalancing proposals |
| `POST` | `/api/rebalance-suggestions/:id/status` | Atomic transaction to accept/reject rebalance & transfer hours |
| `POST` | `/api/projects/:id/match` | Compute weighted candidate fit & team competency coverage |
| `POST` | `/api/reset` | Reset SQLite database to initial baseline seed state |

---

## 🎬 Hackathon Judging Scenarios

Workforce Intelligence comes pre-seeded with two benchmark scenarios designed for rapid evaluation:

### ⚡ Scenario A: AI Team Matching & Skill Gap Analysis
- **Target Project:** `Enterprise Analytics Engine`
- **Requirements:** Python (Level 4, 5x weight), Cloud Architecture (Level 4, 5x weight), Data Analytics (Level 4, 4x weight), SQL (Level 3, 3x weight).
- **Core Insight:** Candidate roster provides strong Python and Analytics capabilities, but uncovers a **Critical Cloud Architecture Gap** (coverage drops to 68%).
- **Interactive Actions:**
  1. Inspect the **Team Capability Coverage: 68%** score ring.
  2. Click the **Skill Gap Identified** chip to directly inspect linked upskilling courses.
  3. Click **"Swap Member"** on any candidate to open the candidate picker and swap in a cloud specialist, observing the coverage recalculate live to 100%!
  4. Click any candidate profile to open the **Apple Draggable Drawer** with detailed capacity, timezone, active project hours, and competency matrices.

### ⚡ Scenario B: Workload Balancing & Burnout Reallocation
- **Workforce Distribution:** 36 verified engineers across 5 engineering departments.
- **Baseline Imbalance:**
  - **3 Overloaded (>100% capacity in Red):** Marcus Chen (130%), Elena Rostova (120%), David Okafor (115%).
  - **4 Underutilized (<50% capacity in Blue):** Chloe Zhang (35%), Tariq Mansour (40%), Sophia Mueller (37.5%), Lucas Silva (45%).
- **Interactive Actions:**
  1. Toggle **"Smart Workload Rebalancer"** to view live before/after metrics.
  2. Click **"Accept Shift"** on proposal #1: Marcus Chen transfers 12h of K8s/Cloud monitoring to Chloe Zhang.
  3. Watch Marcus’s capacity spring down from 52h (130%) to 40h (healthy green), while Chloe rises to 26h (healthy 65%).
  4. Test **"Undo"** to verify non-destructive operation.
  5. Accept all shifts to achieve 100% healthy workload equilibrium across the organization.

---

## 🧱 Architecture & Clean Code Structure

The application strictly separates presentation from data orchestration, using an swappable typed mock repository that can connect to real Supabase / GraphQL / REST backends without altering UI components:

```
src/
├── types/
│   └── index.ts                 # Full domain TypeScript contracts
├── api/
│   ├── mockData.ts              # 36 employees, 15 skills, 6 projects, 6 courses
│   └── index.ts                 # Swappable async repository & matching engine
├── store/
│   ├── useWorkforceStore.ts     # Zustand store with subscribeWithSelector
│   └── useThemeStore.ts         # Dark / Light mode toggle
├── components/
│   ├── ui/                      # Apple HIG primitives
│   │   ├── Button.tsx           # Pointer-down scale feedback
│   │   ├── Badge.tsx            # Semantic status indicators
│   │   ├── ScoreRing.tsx        # Apple Watch spring radial progress
│   │   ├── UtilizationBar.tsx   # Dynamic threshold markers (50%, 100%)
│   │   ├── Drawer.tsx           # Draggable, velocity-aware side sheet
│   │   ├── Modal.tsx            # Accessible dialog
│   │   └── Skeleton.tsx         # Shimmer loading states
│   ├── layout/
│   │   ├── Sidebar.tsx          # Translucent desktop navigation
│   │   ├── TopBar.tsx           # Header, breadcrumbs, theme toggle
│   │   └── Shell.tsx            # Responsive app shell
│   ├── common/
│   │   ├── StatCard.tsx         # Metric counters with spring animations
│   │   └── EmptyState.tsx       # Resilient fallbacks
│   ├── project-match/           # Scenario A hero screen
│   │   ├── ProjectMatchView.tsx
│   │   ├── CreateProjectModal.tsx
│   │   └── SwapMemberModal.tsx
│   ├── workload/                # Scenario B hero screen
│   │   └── WorkloadView.tsx     # Before/after rebalancer
│   ├── overview/                # Screen 1: Cockpit & Recharts trend
│   │   └── OverviewView.tsx
│   ├── skills/                  # Screen 2: 1-5 Heatmap matrix
│   │   ├── SkillsView.tsx
│   │   └── EmployeeDetailDrawer.tsx
│   └── training/                # Screen 5: Gap-to-curricula routing
│       └── TrainingView.tsx
├── App.tsx                      # Root coordinator
├── main.tsx                     # Entry point
└── index.css                    # Design tokens & Apple typography tracking
```

---

## ♿ Accessibility & Design System
- **WCAG 2.2 AA Compliance**: Text contrast meets minimum 4.5:1 ratios; color is never the only signal.
- **Apple Typography Tracking**: Headings feature negative optical tracking (`-0.025em`), and small badges feature positive tracking (`+0.02em`).
- **Reduced Motion**: Full fallback support for `@media (prefers-reduced-motion: reduce)` and `@media (prefers-reduced-transparency: reduce)`.
