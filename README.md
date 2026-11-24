# Protótipo & Testes A/B com IA (`prototipo-testes-ia`)

🇺🇸 **[Read in English (EN-US)](./README.en.md)**

Boilerplate agnóstico de marca e domínio para conduzir o ciclo completo de **Discovery → Engenharia de Prompt (Google Stitch) → Protótipo Navegável A/B (Vite + React + Tailwind) → Validação com Personas Sintéticas (`/swarm`)**, compatível com **Antigravity**, **Google Stitch**, **Cursor** e **Claude Code**.

---

## Arquitetura do Fluxo (4 Fases)

```text
discovery/raw-notes.md ──▶ [Fase A: Síntese] ──▶ discovery/spec-sintetizada.md
                                                          │
                                                   [Fase B: Stitch]
                                                          ▼
stitch/exports/*.html  ◀──  Google Stitch    ◀── stitch/prompts/variantes-ab.md
         │
  [Fase C: Protótipo]
         ▼
app/src/variants/VariantA.jsx & VariantB.jsx (Toggle A/B em localhost:5173)
         │
  [Fase D: /swarm]
         ▼
Validação com Personas Sintéticas + Efeito Cascata + Plano A/B + Ponto de Auditoria Humana
```

---

## Estrutura de Pastas

| Caminho | Finalidade |
| :--- | :--- |
| `discovery/raw-notes.md` | Notas brutas (dados quanti/quali, dores, hipóteses e trade-offs). |
| `discovery/spec-sintetizada.md` | PRD enxuto gerado na Fase A (Causa Raiz, Hipóteses A/B/C, Variante A vs. B, Guardrails). |
| `stitch/prompts/variantes-ab.md` | Prompts calibrados para colar no Google Stitch (Fase B). |
| `stitch/exports/` | Arquivos HTML/imagens exportados do Google Stitch. |
| `app/` | Protótipo Vite + React 19 + Tailwind CSS v4 com `VariantToggle.jsx` pronto. |
| `.agents/skills/` | Skills `stitch-prompt-generator` e `ab-personas` (5 arquétipos configuráveis). |
| `.agents/workflows/ab-test-swarm.md` | Protocolo de validação paralela `/swarm`. |
| `GEMINI.md` / `CLAUDE.md` / `.cursor/rules/` | Regras sincronizadas para Antigravity, Claude Code e Cursor. |
| `PLAYBOOK.md` | Prompts prontos para copiar e colar em cada fase. |

---

## Como Usar em 5 Passos

### 0. Pré-requisitos e Configuração Inicial
- Node.js 18+ instalado.
- Personalize os tokens da sua marca em `GEMINI.md` (`{{BRAND_PRIMARY_HEX}}`, `{{BRAND_LOGO_URL_OR_SVG}}`).
- Instale as dependências do protótipo uma única vez:
  ```bash
  cd app
  npm install
  ```

### 1. Fase A — Discovery
Preencha `discovery/raw-notes.md` com seus dados (e opcionalmente adicione um print da jornada atual em `discovery/`). Depois peça ao seu agente (Antigravity, Cursor ou Claude Code) usando o prompt da **Fase A** em [PLAYBOOK.md](./PLAYBOOK.md).

### 2. Fase B — Geração de Prompts no Google Stitch
Peça ao agente para ler `discovery/spec-sintetizada.md` usando a skill `stitch-prompt-generator` e gerar os prompts em `stitch/prompts/variantes-ab.md`. Cole os prompts no **Google Stitch** e salve os exports em `stitch/exports/`.

### 3. Fase C — Protótipo Navegável Local
Peça ao agente para converter os exports de `stitch/exports/` em `app/src/variants/VariantA.jsx` e `app/src/variants/VariantB.jsx`, mantendo `VariantToggle.jsx` e `App.jsx` intactos. Rode:
```bash
cd app
npm run dev
```

### 4. Fase D — Validação A/B com Personas Sintéticas (`/swarm`)
Execute o workflow `.agents/workflows/ab-test-swarm.md` selecionando os arquétipos de `.agents/skills/ab-personas/resources/` para obter o **Placar**, **Conflitos**, **Variante C**, **Efeito Cascata**, **Plano de Experimentação com Guardrails** e o **Ponto de Auditoria Humana**.

---

## Compatibilidade Multi-Ferramenta

| Ferramenta | Arquivo de Entrada Lido Automaticamente | Como Acionar |
| :--- | :--- | :--- |
| **Antigravity** | `GEMINI.md` + `.agents/skills/` + `.agents/workflows/` | Use `/swarm` ou cole os prompts de `PLAYBOOK.md`. |
| **Cursor** | `.cursor/rules/ab-workflow.mdc` | Abra o projeto no Cursor e cite os arquivos com `@`. |
| **Claude Code** | `CLAUDE.md` | Rode `claude` na raiz do projeto e cole os prompts de `PLAYBOOK.md`. |
| **Google Stitch** | `stitch/prompts/variantes-ab.md` | Copie os blocos de prompt gerados na Fase B e cole no Stitch. |
