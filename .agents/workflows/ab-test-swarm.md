---
description: Executes a parallel A/B test using isolated synthetic persona subagents, mapping Cascade Effects, Experimentation Plan with Guardrails, and an Executive Pitch with a Human Audit Point.
---

# Workflow: Parallel Synthetic Persona A/B Test (/swarm)

## Expected Inputs / Entradas Esperadas
- **Variante A (Controle):** Código (`app/src/variants/VariantA.jsx`), URL local ou export.
- **Variante B (Experimento):** Código (`app/src/variants/VariantB.jsx`), URL local ou export.
- **Fluxo / Alavanca de Growth:** Etapa da jornada testada (ex.: *Onboarding*, *Checkout*, *Loop de Reviews*, *Upgrade Free → Pago*).
- **Arquétipos selecionados:** Lista de arquivos em `.agents/skills/ab-personas/resources/`.

## Step 1: Instantiate Isolated Subagents
Crie subagentes paralelos e isolados (sem compartilhamento de contexto entre si), atribuindo a cada um um único arquétipo de `.agents/skills/ab-personas/resources/`:
- `skeptical-buyer.md`
- `urgent-user.md`
- `analytical-comparator.md`
- `b2b-decision-maker.md`
- `smb-operator.md`

> **Dica de Growth:** Sempre que possível, inclua ao menos 1 arquétipo diretamente afetado pelo fluxo e 1 arquétipo do **lado oposto** (ex.: consumidor final + operador interno/B2B) para capturar efeitos colaterais.

## Step 2: Standard Subagent Prompt
Cada subagente analisa Variante A e Variante B sob seu dispositivo, estado emocional e tolerância à fricção, entregando:
1. **Primeira Impressão (5s)**
2. **Pontos de Fricção (A vs. B)**
3. **Voto Declarado** (`Variante A` ou `Variante B`, proibido empatar + justificativa em até 2 linhas)
4. **Métricas Proxy (`Alto` / `Médio` / `Baixo`)** calibradas ao fluxo (Conclusão/Conversão, TTV, Confiança/ROI)
5. **1 Sugestão de Melhoria** sob a ótica da persona

## Step 3: Systemic Consolidation (Orchestrator)
Consolide as respostas entregando obrigatoriamente:
1. **Placar Geral:** Tabela com Arquétipo, Variante Vencedora, Principal Gatilho e Risco de Abandono/Fricção.
2. **Análise de Conflitos & Arquitetura de Fluxo:** Onde a melhoria para um perfil prejudicou outro e se exige ajuste na mesma tela ou separação de fluxos.
3. **Top 3 Recomendações de Iteração (Variante C):** Ajustes cirúrgicos combinando o melhor de A e B.
4. **Efeito Cascata — Impacto em Outros Fluxos:**
   - **Upstream (Antes):** Como o usuário chega nesse fluxo (SEO, e-mail, push, CTA anterior).
   - **Downstream (Depois):** O que precisa mudar após a ação (backend, confirmação, próximo passo).
   - **Lado Oposto do Ecossistema:** Impacto em outro segmento/lado do produto (ex.: B2B vs. B2C, Suporte vs. Produto).
5. **Plano de Experimentação (MVP de Escala):** Tabela com **Recorte do Teste**, **Métrica Primária**, **Métricas de Guardrail** e **Critério de Decisão (Go/No-Go)**.

## Step 4: Executive Pitch Block + Human Audit Point
1. **Tese Sistêmica em 1 Frase:** Causa raiz → Intervenção → Impacto no negócio.
2. **Trade-off Assumido:** O que foi sacrificado conscientemente.
3. **Ponto de Auditoria Humana:** 1 recomendação ou padrão aparente que parece bom nos números de curto prazo, mas traz alto risco ético, de confiança ou de negócio — para revisão e decisão humana.
