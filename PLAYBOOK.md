# Playbook de Prompts — Fluxo Ponta a Ponta (PT-BR & EN-US)

> Compatível com **Antigravity** (`GEMINI.md`), **Cursor** (`.cursor/rules/ab-workflow.mdc`), **Claude Code** (`CLAUDE.md`) e **Google Stitch** (`https://stitch.google.com/`).

---

## Etapa 1 — FigJam / Miro → Discovery
Compilar as informações brutas do FigJam / Miro (post-its, métricas, dores, fluxos) e colar em `discovery/raw-notes.md`.  
*(Opcional: salve prints da jornada atual em `discovery/` para análise visual).*

---

## Etapa 2 — Processamento de Dados (Fase A)

**PT-BR:**
```text
Processe o arquivo discovery/raw-notes.md (e imagens em discovery/, se houver) seguindo a Fase A do GEMINI.md e gere discovery/spec-sintetizada.md.
Estruture obrigatoriamente:
1. Causa Raiz (cruzando os dados quanti e quali do case).
2. Três hipóteses de solução de produto/crescimento (A, B e C) e o racional de trade-off para descartar duas delas.
3. Definição clara da Variante A (Controle) vs. Variante B (Experimento) para a hipótese vencedora.
4. Métricas-alvo de negócio/receita e Guardrails de integridade.
```

**EN-US:**
```text
Process discovery/raw-notes.md (and any journey images in discovery/) following Phase A of GEMINI.md and generate discovery/spec-sintetizada.md.
Mandatory structure:
1. Root Cause (crossing quantitative and qualitative data).
2. Three product/growth solution hypotheses (A, B, and C) and the trade-off rationale for discarding two of them.
3. Clear definition of Variant A (Control) vs. Variant B (Experiment) for the winning hypothesis.
4. Target business/revenue metrics and integrity Guardrails.
```

---

## Etapa 3 — Gerar Prompts para o Google Stitch (Fase B)

**PT-BR:**
```text
Use a skill stitch-prompt-generator para ler discovery/spec-sintetizada.md e gerar os prompts das Variantes A e B em stitch/prompts/variantes-ab.md.
- Tipo de tela: [Ex: Fluxo mobile B2C (390x844) / Dashboard SaaS desktop (1440x900) / Checkout]
- Foco visual: Máxima aderência aos tokens da marca definidos em GEMINI.md (cards planos, sem cards aninhados, máximo de 1–2 badges por bloco, zero poluição visual).
```

**EN-US:**
```text
Use the stitch-prompt-generator skill to read discovery/spec-sintetizada.md and generate Variant A and Variant B prompts in stitch/prompts/variantes-ab.md.
- Screen type: [e.g., Mobile B2C flow (390x844) / Desktop SaaS dashboard (1440x900) / Checkout]
- Visual focus: Strict adherence to the brand tokens in GEMINI.md (flat cards, no nested cards, max 1–2 badges per block, zero visual clutter).
```

---

## Etapa 4 — Google Stitch (Geração & Export)
1. Copie os prompts de `stitch/prompts/variantes-ab.md` para **https://stitch.google.com/** e gere as telas.
2. Exporte as telas (HTML ou imagens) para `stitch/exports/` (ex.: `variante-a.html` e `variante-b.html`).

---

## Etapa 5 — Protótipo Navegável e Polimento Visual (Fase C)

**PT-BR:**
```text
Leia os arquivos em stitch/exports/ (variante-a e variante-b) e atualize o protótipo navegável já configurado em app/ seguindo a Fase C do GEMINI.md:
1. NÃO recrie o projeto — use o boilerplate Vite + React + Tailwind existente em app/ (com lucide-react e recharts disponíveis).
2. Popule exclusivamente src/variants/VariantA.jsx e src/variants/VariantB.jsx, mantendo intacto o src/components/VariantToggle.jsx e a integração em src/App.jsx.
3. Injete o logotipo e os tokens da marca configurados em GEMINI.md (adaptado ao viewport desktop ou mobile).
4. Faça uma limpeza de craft: remova excesso de pills, corrija qualquer corte de texto/botão e garanta espaçamento limpo.
5. Popule com dados 100% realistas do domínio do produto (sem Lorem Ipsum).
6. Rode npm run dev em app/ e abra a URL local no Browser interno para validar a renderização de ambas as variantes.
```

**EN-US:**
```text
Read the files in stitch/exports/ (variant-a and variant-b) and update the navigable prototype in app/ following Phase C of GEMINI.md:
1. Do NOT recreate the project — use the existing Vite + React + Tailwind boilerplate in app/ (with lucide-react and recharts available).
2. Populate only src/variants/VariantA.jsx and src/variants/VariantB.jsx, keeping src/components/VariantToggle.jsx and src/App.jsx intact.
3. Inject the brand logo and tokens configured in GEMINI.md (adapted to desktop or mobile viewport).
4. Clean up UI craft: remove excess pills, fix any clipped text/buttons, and ensure clean spacing.
5. Populate with 100% realistic product-domain data (no Lorem Ipsum).
6. Run npm run dev in app/ and open the local URL in the built-in Browser to validate both variants.
```

---

## Etapa 6 — Testes A/B com Personas Sintéticas (`/swarm` — Fase D)

**PT-BR:**
```text
Execute o workflow /swarm (ab-test-swarm.md) comparando a Variante A e a Variante B rodando no servidor local.
- Fluxo / Alavanca de Growth: [Ex: Onboarding / Checkout / Upgrade Free → Pago / Coleta de Reviews]
- Subagentes a instanciar: [skeptical-buyer, urgent-user, analytical-comparator, b2b-decision-maker, smb-operator]
Quero a consolidação completa com: Placar, Efeito Cascata (Upstream, Downstream e Lado Oposto), Plano de Experimentação com Guardrails e o Bloco de Pitch com o Ponto de Auditoria Humana.
```

**EN-US:**
```text
Run the /swarm workflow (ab-test-swarm.md) comparing Variant A and Variant B running on the local server.
- Growth Flow / Lever: [e.g., Onboarding / Checkout / Free-to-Paid Upgrade / Review Collection]
- Subagents to instantiate: [skeptical-buyer, urgent-user, analytical-comparator, b2b-decision-maker, smb-operator]
Deliver the full consolidation: Scoreboard, Cascade Effects (Upstream, Downstream, Opposite Side), Experimentation Plan with Guardrails, and the Executive Pitch Block with a Human Audit Point.
```

---

## Etapa 7 — FigJam / Miro (Registro de Decisão)
Cole os resultados consolidados do `/swarm` (Placar, Efeito Cascata, Plano de Experimentação e Pitch) nos quadros de decisão do seu FigJam / Miro.

---

## Etapa 8 — Ajustes Pós-Validação e Iteração Rápida (Variante C)

**PT-BR:**
```text
Aplique na Variante B em app/ apenas o ajuste nº [X] sugerido pelo /swarm para gerar uma melhoria rápida.
Descarte explicitamente a recomendação [Y] porque [motivo de negócio/UX]. Atualize o protótipo local sem quebrar o VariantToggle.
```

**EN-US:**
```text
Apply to Variant B in app/ only adjustment #[X] suggested by /swarm for a quick improvement.
Explicitly discard recommendation [Y] because [business/UX rationale]. Update the local prototype without breaking VariantToggle.
```
