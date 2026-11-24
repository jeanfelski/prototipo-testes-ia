# CLAUDE.md — AI A/B Discovery & Prototype Kit

> **Language:** Supports **PT-BR** and **EN-US**. Respond in the same language as the user's prompt.

This repository is a structured workspace for end-to-end product experimentation:
**Discovery (`discovery/`) → UI Prompting (`stitch/`) → Interactive A/B Prototype (`app/`) → Synthetic Persona Validation (`.agents/workflows/ab-test-swarm.md`)**.

## Source of Truth
Follow the exact same rules, phases (A, B, C, D), and configurable Design System tokens defined in `GEMINI.md`:
- **Phase A (Discovery):** Read `discovery/raw-notes.md` (and any attached journey screenshots) and generate `discovery/spec-sintetizada.md` with Root Cause, 3 Hypotheses + Trade-offs, Variant A vs. Variant B, and Target Metrics + Guardrails. Never fabricate metrics without tagging them as `[Suggestion]` / `[Sugestão]`.
- **Phase B (Stitch Prompts):** Follow `.agents/skills/stitch-prompt-generator/SKILL.md` to generate copy-pasteable prompts for Google Stitch in `stitch/prompts/variantes-ab.md`.
- **Phase C (Prototype in `app/`):** Read exports in `stitch/exports/` and update only `app/src/variants/VariantA.jsx` and `app/src/variants/VariantB.jsx`, preserving `app/src/components/VariantToggle.jsx` and `app/src/App.jsx`. Enforce clean flat cards (`#FFFFFF` on `#F4F6F8`, `1px solid #E2E8F0`, `rounded-[12px]`), no nested cards, max 1–2 badges per block, realistic domain data (no *Lorem Ipsum*), and zero clipped text/buttons.
- **Phase D (A/B Validation):** Follow `.agents/workflows/ab-test-swarm.md` and `.agents/skills/ab-personas/SKILL.md` to evaluate Variant A vs. Variant B using isolated persona prompts from `.agents/skills/ab-personas/resources/`, then consolidate Scoreboard, Conflicts, Variant C recommendations, Cascade Effects (Upstream/Downstream/Opposite Side), Experimentation Plan with Guardrails, and Executive Pitch + Human Audit Point.
