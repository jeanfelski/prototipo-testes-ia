# Playbook de Prompts (PT-BR & EN-US)

Use os prompts abaixo em qualquer etapa no **Antigravity**, **Cursor** ou **Claude Code**.

---

## Fase A — Síntese de Discovery (`discovery/spec-sintetizada.md`)

**PT-BR:**
```text
Processe o arquivo discovery/raw-notes.md (e imagens em discovery/, se houver) seguindo a Fase A do GEMINI.md e gere discovery/spec-sintetizada.md.
Estruture obrigatoriamente:
1. Causa Raiz (cruzando dados quanti e quali).
2. Três hipóteses de solução (A, B e C) e o racional de trade-off para descartar duas delas.
3. Definição clara da Variante A (Controle) vs. Variante B (Experimento) para a hipótese vencedora.
4. Métricas-alvo de negócio/receita e Guardrails de integridade.
```

**EN-US:**
```text
Process discovery/raw-notes.md (and any journey screenshots in discovery/) following Phase A of GEMINI.md and generate discovery/spec-sintetizada.md.
Mandatory structure:
1. Root Cause (crossing quantitative and qualitative data).
2. Three solution hypotheses (A, B, C) and the trade-off rationale for discarding two of them.
3. Clear definition of Variant A (Control) vs. Variant B (Experiment) for the winning hypothesis.
4. Target business/revenue metrics and integrity Guardrails.
```

---

## Fase B — Prompts para Google Stitch (`stitch/prompts/variantes-ab.md`)

**PT-BR:**
```text
Use a skill stitch-prompt-generator para ler discovery/spec-sintetizada.md e gerar os prompts das Variantes A e B em stitch/prompts/variantes-ab.md.
Foco visual: cards planos, zero cards aninhados, máximo de 1–2 badges por bloco, zero poluição visual e microcopy realista no idioma do produto.
```

**EN-US:**
```text
Use the stitch-prompt-generator skill to read discovery/spec-sintetizada.md and generate the Variant A and Variant B prompts in stitch/prompts/variantes-ab.md.
Visual focus: flat cards, zero nested cards, max 1–2 badges per block, zero visual clutter, and realistic product microcopy.
```

---

## Fase C — Protótipo Navegável (`app/`)

**PT-BR:**
```text
Leia os arquivos em stitch/exports/ (Variante A e Variante B) e atualize o protótipo navegável em app/ seguindo a Fase C do GEMINI.md:
1. Não recrie o projeto; use o boilerplate Vite + React + Tailwind existente em app/.
2. Popule exclusivamente src/variants/VariantA.jsx e src/variants/VariantB.jsx, mantendo VariantToggle.jsx e App.jsx intactos.
3. Faça limpeza de craft (remova excesso de pills, corrija textos/botões cortados, garanta espaçamento limpo).
4. Popule com dados 100% realistas do domínio (sem Lorem Ipsum) e valide rodando npm run dev.
```

**EN-US:**
```text
Read the files in stitch/exports/ (Variant A and Variant B) and update the navigable prototype in app/ following Phase C of GEMINI.md:
1. Do not recreate the project; use the existing Vite + React + Tailwind boilerplate in app/.
2. Populate only src/variants/VariantA.jsx and src/variants/VariantB.jsx, keeping VariantToggle.jsx and App.jsx intact.
3. Clean up UI craft (remove excess pills, fix any clipped text/buttons, ensure clean spacing).
4. Use 100% realistic domain data (no Lorem Ipsum) and verify by running npm run dev.
```

---

## Fase D — Validação A/B com Personas Sintéticas (`/swarm`)

**PT-BR:**
```text
Execute o workflow .agents/workflows/ab-test-swarm.md comparando a Variante A e a Variante B.
- Fluxo / Alavanca de Growth: [Descreva o fluxo, ex.: Checkout / Onboarding / Review]
- Subagentes a instanciar: [ex.: skeptical-buyer, urgent-user, smb-operator]
Entregue a consolidação completa: Placar, Conflitos, Variante C, Efeito Cascata (Upstream, Downstream e Lado Oposto), Plano de Experimentação com Guardrails e Bloco de Pitch com Ponto de Auditoria Humana.
```

**EN-US:**
```text
Run .agents/workflows/ab-test-swarm.md comparing Variant A and Variant B.
- Growth Flow / Lever: [Describe the flow, e.g., Checkout / Onboarding / Review]
- Subagents to instantiate: [e.g., skeptical-buyer, urgent-user, smb-operator]
Deliver the full consolidation: Scoreboard, Conflicts, Variant C, Cascade Effects (Upstream, Downstream, Opposite Side), Experimentation Plan with Guardrails, and Executive Pitch + Human Audit Point.
```
