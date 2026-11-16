/* Aba "Voice Studio" do Teste 5: status ao vivo do cordão umbilical.
 * Arquivo novo; não altera o app.js do painel (a troca de abas é genérica por data-view).
 * Fontes públicas, sem credencial:
 *   - grupo-reis/UPSTREAM.json no repositório do Grupo Reis (última sincronização)
 *   - API do GitHub: quantos commits o criador está à frente dessa sincronização
 */
(function () {
  'use strict';

  var REPO = 'renatosfcontador-ops/Voice-Studio-Grupo-Reis';
  var UPSTREAM = 'debpalash/VoiceStudio';
  var carregado = false;

  function linha(rotulo, valorHtml) {
    var d = document.createElement('div');
    d.className = 'fe-cmd';
    var s = document.createElement('span');
    s.textContent = rotulo;
    var v = document.createElement('div');
    v.innerHTML = valorHtml;
    d.appendChild(s);
    d.appendChild(v);
    return d;
  }
  function esc(t) { return String(t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function curto(sha) { return esc(String(sha || '').slice(0, 9)); }

  function carregar() {
    if (carregado) return;
    carregado = true;
    var alvo = document.getElementById('vs-cordao-status');
    if (!alvo) return;

    fetch('https://raw.githubusercontent.com/' + REPO + '/main/grupo-reis/UPSTREAM.json', { cache: 'no-store' })
      .then(function (r) { if (!r.ok) throw new Error('UPSTREAM.json ' + r.status); return r.json(); })
      .then(function (u) {
        alvo.textContent = '';
        alvo.appendChild(linha('Fonte matriz', '<a href="' + esc(String(u.upstream_url).replace(/\.git$/, '')) + '" target="_blank" rel="noopener noreferrer">' + esc(UPSTREAM) + '</a>'));
        alvo.appendChild(linha('Última sincronização', '<code>' + curto(u.last_synced_sha) + '</code> em ' + esc(u.last_synced_at) + ' (versão ' + esc(u.upstream_version_na_sincronizacao) + ')'));
        var placar = linha('Novidades do criador', '<span class="hint">consultando…</span>');
        alvo.appendChild(placar);
        return fetch('https://api.github.com/repos/' + UPSTREAM + '/compare/' + u.last_synced_sha + '...main', { headers: { Accept: 'application/vnd.github+json' } })
          .then(function (r) { if (!r.ok) throw new Error('compare ' + r.status); return r.json(); })
          .then(function (c) {
            var n = c.ahead_by || 0;
            placar.lastChild.innerHTML = n === 0
              ? '🟢 em dia com o criador'
              : '🟡 <strong>' + n + '</strong> commit(s) novo(s) no criador para integrar (rode o script de sincronização do repositório)';
          })
          .catch(function () { placar.lastChild.innerHTML = '<span class="hint">não consegui consultar agora (limite da API do GitHub); veja o repositório.</span>'; });
      })
      .catch(function () {
        alvo.textContent = 'Não foi possível consultar o status agora. Veja o arquivo estaleiro/CORDAO-UMBILICAL.md.';
      });
  }

  document.addEventListener('click', function (ev) {
    var t = ev.target.closest ? ev.target.closest('.tab[data-view="voicestudio"]') : null;
    if (t) carregar();
  });
})();
