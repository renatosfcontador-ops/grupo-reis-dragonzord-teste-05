# Cordão umbilical — DragonZord Teste 5

**Status:** 🟢 ativo para o que importa (o Voice Studio); modelo do painel é cópia (veja abaixo).

## 1. Fonte matriz do produto (cordão de verdade)

| | |
|---|---|
| **Fonte matriz** | https://github.com/debpalash/VoiceStudio |
| Releases | https://github.com/debpalash/VoiceStudio/releases |
| Issues | https://github.com/debpalash/VoiceStudio/issues |
| Código do Grupo Reis | https://github.com/renatosfcontador-ops/Voice-Studio-Grupo-Reis (continuação do histórico do criador, remote `upstream` ativo) |
| Registro do vínculo | [`grupo-reis/UPSTREAM.json`](https://github.com/renatosfcontador-ops/Voice-Studio-Grupo-Reis/blob/main/grupo-reis/UPSTREAM.json) (`last_synced_sha`) |
| Como sincronizar | `grupo-reis/scripts/sincronizar-upstream.ps1 -Aplicar` (ramo `sync/upstream-AAAAMMDD`, depois PR) |
| Vigia | workflow semanal abre uma issue quando o criador publica novidades |

A aba **Voice Studio** deste painel consulta, ao vivo, o `UPSTREAM.json` e a API do GitHub e mostra se o Grupo Reis está em dia
ou quantos commits novos há para integrar. As customizações do Grupo Reis (login unificado, marca, CSP do túnel, avisos de compliance)
ficam em caminhos novos e **não são sobrescritas** por atualizações do criador.

## 2. Modelo do painel (sem histórico comum)

Este painel foi gerado por `scripts/create-instance.js` a partir do modelo do ecossistema
([Teste Zero](https://github.com/renatosfcontador-ops/grupo-reis-dragonzord-teste-zero), com o semáforo de compliance do Teste 2).
É uma **cópia**, não um clone: não há histórico git em comum, então `git pull` do modelo não existe.
Para trazer melhorias do modelo, compare e copie os arquivos de infraestrutura (`assets/app.js`, `assets/styles.css`, `server.js`),
preservando o que é do Teste 5: `projects.json`, `assets/voicestudio.js`, a aba `view-voicestudio` do `index.html`,
`docs/COMPLIANCE-VOZ.md` e esta pasta `estaleiro/`.

## 3. Login unificado

Mesmo e-mail e mesmo hash dos demais painéis (`renato.sf.contador@gmail.com`). É um portão de navegador; não protege dados no servidor.
