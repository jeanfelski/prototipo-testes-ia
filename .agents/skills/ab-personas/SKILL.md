---
name: ab-personas
description: Simulates A/B tests of digital interfaces, prototypes, or user flows using isolated behavioral synthetic personas across B2C, SaaS, and B2B contexts. Supports PT-BR and EN-US.
---

# Synthetic Persona A/B Simulator

## Objective / Objetivo
Avaliar duas variantes de interface ou fluxo (**Variante A** vs. **Variante B**) sob a ótica de arquétipos comportamentais configuráveis em `resources/`, identificando fricção, gatilhos de confiança, percepção de valor/ROI e riscos de integridade.

## Execution Protocol / Protocolo de Execução
1. **Seleção de Arquétipos:** Escolha os arquivos em `.agents/skills/ab-personas/resources/` mais relevantes para o fluxo testado (ou rode todos para cobertura completa).
2. **Leitura sob Demanda:** Cada subagente deve ler **apenas o arquivo do seu arquétipo** para manter isolamento completo.
3. **Avaliação Independente (4 Etapas):**
   - **Teste dos 5 Segundos:** O que a persona enxerga primeiro no dispositivo dela e se a proposta fica óbvia.
   - **Walkthrough Cognitivo:** Passo a passo tentando concluir a tarefa, apontando onde hesita, ignora textos ou desconfia.
   - **Veredito (Variante A vs. Variante B):** Escolha obrigatória (proibido empatar) com justificativa direta.
   - **Impacto nas Métricas Proxy:** Estimativa (`Alto`/`High`, `Médio`/`Medium`, `Baixo`/`Low`) em Conversão/Conclusão, Time-to-Value (TTV) e Confiança Percebida.
4. **Regras Críticas:**
   - **Nunca crie usuários educados:** Personas reais pulam textos longos, ignoram tutoriais e abandonam se houver fricção ou sinal de manipulação (*dark patterns*).
   - **Fidelidade ao dispositivo:** Penalize alvos pequenos, rolagem excessiva ou texto cortado no mobile.
