---
name: stitch-prompt-generator
description: Generates clean, high-craft UI prompts for Google Stitch from discovery specs, enforcing low cognitive load, flat cards, configurable brand tokens, and strict A/B contrast (Variant A vs. Variant B). Supports PT-BR and EN-US.
---

# Google Stitch Prompt Generator — Clean UI & Low Cognitive Load

## Objective / Objetivo
Transformar requisitos de `discovery/spec-sintetizada.md` (ou descrições de tela) em prompts prontos para colar no **Google Stitch**, evitando o visual genérico de IA (excesso de *badges*, cards aninhados e poluição visual) e garantindo contraste claro entre **Variante A (Controle)** e **Variante B (Experimento)**.

## Configurable Design Tokens (Calibragem Visual)
Antes de gerar o prompt, leia os tokens definidos em `GEMINI.md` (ou use os padrões limpos abaixo):
1. **Superfícies & Tipografia:**
   - Fundo de página sutil (`#F4F6F8`), cards brancos planos (`#FFFFFF`), borda fina (`1px solid #E2E8F0`), raio `12px` e **zero sombras pesadas**.
   - Tipografia *Inter* ou *Plus Jakarta Sans*: títulos `#0F172A`, corpo `#334155`, metadados `#64748B`.
   - **Cor Primária da Marca:** `{{BRAND_PRIMARY_HEX}}` (aplicada com parcimônia apenas em 1 CTA primário por tela, estados selecionados e ícones-chave).
   - **Estados Semânticos:** Sucesso (`#16A34A`), Alerta (`#F59E0B`), Risco/Erro (`#EF4444`), Neutro (`#64748B`).

2. **Regras Rígidas Anti-Poluição (Obrigatório no Prompt):**
   - **PROIBIDO cards dentro de cards:** Use divisores sutis (`1px solid #F1F5F9`) e padding `20px–24px`.
   - **Orçamento de Badges (Máximo 1 a 2 por Card):** Substitua *pills* secundárias por texto neutro (`#64748B`) separado por ponto (`•`).
   - **Zero Quebra de Layout:** Em tabelas, listas e chips, instrua colunas equilibradas, rótulos curtos e proibição de overflow horizontal ou texto cortado.
   - **Header Autêntico:** Barra superior limpa com espaço reservado para o logotipo da marca (`{{BRAND_LOGO}}`).

3. **Realismo de Dados (Sem Lorem Ipsum):**
   - Insira microcopy curta, escaneável e realista no idioma alvo do produto (`PT-BR` ou `EN-US`).

## Prompt Output Structure (5 Mandatory Sections)
Entregue **dois prompts independentes e copiáveis** (Variante A e Variante B) em `stitch/prompts/variantes-ab.md`:
- **[1] Contexto, Fluxo & Viewport:** Tipo de usuário, tela, viewport (`Mobile 390x844` ou `Desktop 1440x900`) e objetivo.
- **[2] Direção de Arte & Restrições Anti-Poluição:** Cards planos, zero aninhamento, máx. 1–2 badges por bloco, uso contido da cor primária.
- **[3] Arquitetura de Informação (Blocos):** Sequência de seções *above the fold* e ação principal.
- **[4] Conteúdo & Microcopy Realista:** Textos exatos em PT-BR ou EN-US.
- **[5] Diferencial da Variante (A vs. B):** O elemento exato alterado para testar a hipótese do discovery.
