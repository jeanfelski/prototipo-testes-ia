# AI A/B Discovery & Prototype Kit (`prototipo-testes-ia`)

🇧🇷 **[Ler em Português (PT-BR)](./README.md)**

A brand-agnostic, domain-agnostic boilerplate to run the full **Discovery → Google Stitch UI Prompting → Interactive A/B Prototype (Vite + React + Tailwind) → Synthetic Persona Validation (`/swarm`)** workflow. Compatible with **Antigravity**, **Google Stitch**, **Cursor**, and **Claude Code**.

---

## 4-Phase Workflow

```text
discovery/raw-notes.md ──▶ [Phase A: Synthesis] ──▶ discovery/spec-sintetizada.md
                                                              │
                                                     [Phase B: Stitch]
                                                              ▼
stitch/exports/*.html  ◀──   Google Stitch    ◀── stitch/prompts/variantes-ab.md
         │
  [Phase C: Prototype]
         ▼
app/src/variants/VariantA.jsx & VariantB.jsx (A/B Toggle at localhost:5173)
         │
  [Phase D: /swarm]
         ▼
Synthetic Persona Validation + Cascade Effects + Experimentation Plan + Human Audit Point
```

---

## Folder Structure

| Path | Purpose |
| :--- | :--- |
| `discovery/raw-notes.md` | Raw discovery notes (quanti/quali data, pain points, hypotheses, trade-offs). |
| `discovery/spec-sintetizada.md` | Lean PRD generated in Phase A (Root Cause, 3 Hypotheses, Variant A vs. B, Guardrails). |
| `stitch/prompts/variantes-ab.md` | Copy-pasteable UI prompts for Google Stitch (Phase B). |
| `stitch/exports/` | Exported HTML or image files from Google Stitch. |
| `app/` | Vite + React 19 + Tailwind CSS v4 prototype with `VariantToggle.jsx` pre-wired. |
| `.agents/skills/` | `stitch-prompt-generator` and `ab-personas` (5 configurable behavioral archetypes). |
| `.agents/workflows/ab-test-swarm.md` | Parallel `/swarm` A/B validation protocol. |
| `GEMINI.md` / `CLAUDE.md` / `.cursor/rules/` | Synchronized agent instructions for Antigravity, Claude Code, and Cursor. |
| `PLAYBOOK.md` | Ready-to-use bilingual prompts for every phase. |

---

## Quick Start (5 Steps)

### 0. Prerequisites & Setup
- Node.js 18+ installed.
- Customize your brand tokens in `GEMINI.md` (`{{BRAND_PRIMARY_HEX}}`, `{{BRAND_LOGO_URL_OR_SVG}}`).
- Install prototype dependencies once:
  ```bash
  cd app
  npm install
  ```

### 1. Phase A — Discovery Synthesis
Fill in `discovery/raw-notes.md` with your data (and optionally add a screenshot of your current user journey to `discovery/`). Then run the **Phase A** prompt from [PLAYBOOK.md](./PLAYBOOK.md).

### 2. Phase B — Google Stitch Prompting
Ask your AI agent to read `discovery/spec-sintetizada.md` using `stitch-prompt-generator` and generate the prompts in `stitch/prompts/variantes-ab.md`. Paste them into **Google Stitch** and save the exports into `stitch/exports/`.

### 3. Phase C — Local Interactive Prototype
Ask your AI agent to convert `stitch/exports/` into `app/src/variants/VariantA.jsx` and `app/src/variants/VariantB.jsx`, keeping `VariantToggle.jsx` and `App.jsx` intact. Run:
```bash
cd app
npm run dev
```

### 4. Phase D — Synthetic Persona Validation (`/swarm`)
Run `.agents/workflows/ab-test-swarm.md` using archetypes from `.agents/skills/ab-personas/resources/` to generate the **Scoreboard**, **Conflicts**, **Variant C**, **Cascade Effects**, **Experimentation Plan with Guardrails**, and **Executive Pitch + Human Audit Point**.

---

## Multi-Tool Compatibility

| Tool | Auto-Loaded Instructions | How to Run |
| :--- | :--- | :--- |
| **Antigravity** | `GEMINI.md` + `.agents/skills/` + `.agents/workflows/` | Use `/swarm` or paste prompts from `PLAYBOOK.md`. |
| **Cursor** | `.cursor/rules/ab-workflow.mdc` | Open workspace in Cursor and reference files with `@`. |
| **Claude Code** | `CLAUDE.md` | Run `claude` at the repo root and paste prompts from `PLAYBOOK.md`. |
| **Google Stitch** | `stitch/prompts/variantes-ab.md` | Copy the generated prompts from Phase B into Stitch. |
