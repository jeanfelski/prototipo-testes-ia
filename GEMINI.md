# Contexto & Regras do Projeto — AI A/B Discovery & Prototype Kit

> **Idioma / Language:** Este repositório suporta **PT-BR** e **EN-US**. Responda no idioma em que o usuário interagir.

## 1. Visão Geral & Objetivo / Overview
Este workspace centraliza o fluxo ponta a ponta de **Discovery → Engenharia de Prompt (Google Stitch) → Protótipo Navegável A/B → Validação com Personas Sintéticas (`/swarm`)** para qualquer produto digital (SaaS, E-commerce, Marketplace, App Mobile ou Web).

---

## 2. Mapa de Diretórios (Fonte da Verdade / Directory Map)
- `discovery/`
  - `raw-notes.md`: Dados brutos de discovery (quanti, quali, dores, hipóteses e trade-offs).
  - `spec-sintetizada.md`: PRD enxuto com Causa Raiz, Hipóteses A/B/C, Variante A vs. B, Métricas-Alvo e Guardrails.
- `stitch/`
  - `prompts/`: Prompts estruturados para colar no **Google Stitch**.
  - `exports/`: Exports (HTML/Tailwind/React ou imagens) gerados no Stitch para as Variantes A e B.
- `app/`: Protótipo navegável local (Vite + React + Tailwind CSS) com `VariantToggle.jsx` para alternar entre Variante A e Variante B.
- `.agents/`
  - `skills/ab-personas/`: Arquétipos comportamentais genéricos (`skeptical-buyer`, `urgent-user`, `analytical-comparator`, `b2b-decision-maker`, `smb-operator`).
  - `skills/stitch-prompt-generator/SKILL.md`: Gerador de prompts calibrado para UI limpa e baixa carga cognitiva.
  - `workflows/ab-test-swarm.md`: Protocolo de execução paralela de testes A/B (`/swarm`).

---

## 3. Design System Configurável & Regras de Craft (Anti-Poluição)
Personalize os tokens abaixo conforme a identidade da sua marca antes de iniciar:
- **Cor Primária (CTA / Sucesso):** `{{BRAND_PRIMARY_HEX}}` (Padrão do boilerplate: `#2563EB` / `#16A34A`)
- **Fundo da Página:** `#F4F6F8` | **Cards Planos:** `#FFFFFF` com borda `1px solid #E2E8F0` e `border-radius: 12px`
- **Tipografia:** `Inter` ou `Plus Jakarta Sans` (`#0F172A` títulos, `#334155` corpo, `#64748B` metadados)
- **Logotipo da Marca:** `{{BRAND_LOGO_URL_OR_SVG}}`

### Regras Rígidas de Baixa Carga Cognitiva
1. **Zero Cards Aninhados:** Nunca coloque cards com borda dentro de outros cards com borda; use divisores sutis (`1px solid #F1F5F9`) e padding `20px–24px`.
2. **Orçamento de Badges (Máximo 1 a 2 por Card):** Evite empilhar múltiplas *pills* coloridas. Use texto neutro (`#64748B`) separado por ponto (`•`).
3. **Uso Cirúrgico de Cor:** A cor primária deve aparecer apenas em 1 CTA primário por tela, estados ativos e ícones-chave.
4. **Zero Quebra de Layout:** Em tabelas, chips e botões mobile/desktop, garanta ausência de overflow horizontal e texto/botão cortado.

---

## 4. Regras de Operação por Fase

### Fase A: Síntese de Discovery (`discovery/`)
Ao processar `discovery/raw-notes.md` (e imagens/prints opcionais em `discovery/`), extraia obrigatoriamente:
1. **Causa Raiz** (cruzando dados quantitativos e qualitativos).
2. **Três Hipóteses de Solução (A, B e C)** e o **racional de trade-off** para descartar duas delas.
3. **Definição clara da Variante A (Controle) vs. Variante B (Experimento)**.
4. **Métricas-alvo** (conversão, abandono, TTV, receita) e **Guardrails de integridade**.
- Nunca invente dados ou requisitos fora do escopo documentado sem sinalizar claramente como `[Sugestão]` / `[Suggestion]`.

### Fase B: Engenharia de Prompt para Google Stitch (`stitch/prompts/`)
- Utilize a skill `stitch-prompt-generator` respeitando os tokens da Seção 3.
- Especifique viewport (`Mobile 390x844` ou `Desktop 1440x900`), microcopy realista no idioma do produto (zero *Lorem Ipsum*) e restrições explícitas contra excesso de badges e cards aninhados.

### Fase C: Construção do Protótipo (`app/`)
- Popule exclusivamente `app/src/variants/VariantA.jsx` e `app/src/variants/VariantB.jsx`, mantendo `VariantToggle.jsx` e `App.jsx` intactos.
- Refatore qualquer ruído vindo do Stitch (excesso de *pills*, truncamentos, espaçamentos) e use dados realistas do domínio do produto.
- Valide localmente com `npm run dev` (e inspeção visual no browser quando disponível).

### Fase D: Validação A/B com Personas Sintéticas (`/swarm`)
- Execute `.agents/workflows/ab-test-swarm.md` e a skill `ab-personas`.
- Instancie os arquétipos solicitados de forma isolada e entregue a consolidação completa: **Placar**, **Conflitos**, **Variante C**, **Efeito Cascata (Upstream, Downstream e Lado Oposto)**, **Plano de Experimentação com Guardrails** e **Bloco de Pitch com Ponto de Auditoria Humana**.
