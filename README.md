# DragonZord — Teste 5

**Voice Studio · Grupo Reis: interface no Netlify, motor de voz em GPU (Kaggle), compliance de voz e cordão umbilical.**

O Teste 5 é a quinta instância prática do ecossistema DragonZord. Ele homologa o **Voice Studio** (clonagem de voz, design de voz, dublagem e transcrição) numa arquitetura sem peso na máquina local:

| Peça | Onde | Endereço |
|---|---|---|
| Painel de homologação (este repositório) | GitHub Pages | https://renatosfcontador-ops.github.io/grupo-reis-dragonzord-teste-05/ |
| Interface do Voice Studio | Netlify (fixa) | https://voice-studio-grupo-reis.netlify.app |
| Código do Voice Studio · Grupo Reis | GitHub | https://github.com/renatosfcontador-ops/Voice-Studio-Grupo-Reis |
| **Fonte matriz (upstream)** | GitHub | https://github.com/debpalash/VoiceStudio |
| Motor de voz | Notebook do Kaggle com GPU, túnel por sessão e chave de API | notebook do repositório acima |

> **Regra de isolamento:** todo processamento pesado vai para o Kaggle. A infraestrutura de produção da AWS permanece 100% blindada e intocada.

## Compliance de voz — Prateleira Amarela 🟡

Clonar voz exige **consentimento prévio e por escrito** da pessoa, para uma finalidade definida. Regras, checklist e minuta de termo em [`docs/COMPLIANCE-VOZ.md`](docs/COMPLIANCE-VOZ.md). É minuta: precisa de revisão do jurídico antes de uso comercial.

## Cordão umbilical

Status e links da fonte matriz em [`estaleiro/CORDAO-UMBILICAL.md`](estaleiro/CORDAO-UMBILICAL.md). A aba **Voice Studio** do painel mostra, ao vivo, quantos commits o criador está à frente da última sincronização.

## Como rodar o painel

```bash
npm start
# abra http://localhost:3000
```

Requisitos: Node.js 18+. O painel abre com login (mesmo login unificado dos outros testes); a sessão fica em `localStorage` na chave `dragonzord_auth`. Abas: Grid de Comando, Relatórios de Teste, Compliance, **Estaleiro**, Kaggle Sandbox, **Voice Studio**, Configurações.

## Estrutura

```
grupo-reis-dragonzord-teste-05/
├── index.html                 # painel (aba Voice Studio acrescentada)
├── assets/
│   ├── app.js                 # lógica do painel (igual ao modelo; Estaleiro intacto)
│   ├── voicestudio.js         # status ao vivo do cordão umbilical (arquivo novo)
│   └── styles.css
├── projects.json              # catálogo (1 projeto) + regras de compliance
├── docs/                      # ARCHITECTURE, CATALOG, COMPLIANCE, COMPLIANCE-VOZ, KAGGLE, INSTANCE-GUIDE
├── estaleiro/                 # doca de montagem: LINKS e CORDAO-UMBILICAL
└── .github/workflows/deploy-pages.yml
```

Gerado com `scripts/create-instance.js` a partir do modelo do ecossistema (Teste Zero / Teste 2).
