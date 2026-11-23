# The Periodic Table of Gemini (`gemini_info`)

**English** | [简体中文](./README.zh-CN.md)

An interactive, zero-build static web guide that maps **Google's Gemini 4 element-named models** onto the complete 118-element Periodic Table—helping developers and users distinguish the true capability hierarchy, thinking budgets, and ideal workloads of each model.

---

## Why This Exists

Google names the **Gemini 4** lineup after chemical elements instead of sequential version numbers. Because atomic numbers do **not** correspond linearly to model size or reasoning power, it is easy to misinterpret the tiers.

### True Capability Hierarchy (Heaviest Reasoning → Fastest Executor)

| Rank | Element & Atomic # | Model Name | Capability Tier | Classic Equivalent | Supported Thinking Budgets | Primary Role |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **#1** | **C** (`#6`) | **Gemini 4 Carbon** | Frontier Flagship / Heavy Planner | Ultra / Pro-Heavy | `low`, `medium`, `high` | Long-horizon reasoning, `/swarm` multi-agent orchestration, deep architecture |
| **#2** | **Ar** (`#18`) | **Gemini 4 Argon** | Efficient Frontier Reasoning | Pro (High-Reasoning) | `medium`, `high` | Daily system architecture, low-hallucination analysis with lower token spend |
| **#3** | **Ne** (`#10`) | **Gemini 4 Neon** | Pareto Production Model | Pro (Balanced Production) | `low`, `medium`, `high` | Concise, steerable production software engineering & analytical workflows |
| **#4** | **H** (`#1`) | **Gemini 4 Hydrogen** | Fast Agentic Executor | Flash / Flash-Lite Successor | `low`, `medium`, `high`, `xhigh` | High-speed execution loops, tool calling, parallel subagent workers |

---

## Key Features

- **Full 118-Element Interactive Periodic Table**: Active Gemini models (**H #1**, **C #6**, **Ne #10**, **Ar #18**) glow with tier-coded neon borders; the remaining 114 unclaimed elements appear dimmed with informative status tooltips.
- **Workload Spotlight Filters**: One-click filters (*Deep Planning & Swarm*, *Architecture & Analysis*, *Production Engineering*, *Fast Agentic Loops*, and *Planner + Executor Duo*) pulse matching elements directly on the table.
- **True Capability Hierarchy Strip**: Visual rank cards ordered by actual reasoning weight (`Carbon #6 > Argon #18 > Neon #10 > Hydrogen #1`).
- **Slide-Over Model Inspector Drawer**: Inspect 5-axis capability bars, thinking budget tags, 1M-token context specs, chemistry-to-AI naming rationale, and multi-agent pairing tips.
- **Reaction Chamber (Side-by-Side Comparator)**: Compare any combination of Gemini element models head-to-head.
- **Bilingual (`EN / 中文`) Toggle & Self-Hosted Fonts**: Instant English/Chinese switching with self-hosted variable WOFF2 Latin fonts (`Inter` and `JetBrains Mono`) paired with native CJK system fallbacks for zero external network blocking.

---

## Project Structure

```text
gemini_info/
├── index.html                        # Main layout, periodic grid container, drawer & compare modal
├── styles.css                        # DeepMind Quantum Lab dark theme & self-hosted @font-face rules
├── data.js                           # All 118 periodic elements + bilingual Gemini 4 model catalog
├── app.js                            # Interactive table rendering, spotlight filters, drawer & comparator
└── fonts/
    ├── inter-latin-var.woff2         # Self-hosted Inter variable Latin subset
    └── jetbrains-mono-latin-var.woff2# Self-hosted JetBrains Mono variable Latin subset
```

---

## Running Locally

No build step is required. Open `index.html` directly in a browser, or serve the folder with any static HTTP server:

```bash
python3 -m http.server 8123
```

Then visit `http://localhost:8123`.

---

## Adding Future Element-Named Gemini Models

To light up a newly released element model on the periodic table (for example, Oxygen `#8`), add an entry keyed by its atomic number to `window.GEMINI_MODELS` (and `window.CAPABILITY_ORDER`) in [`data.js`](./data.js). The periodic table, spotlight filters, drawer, and comparison modal will automatically activate that tile.
