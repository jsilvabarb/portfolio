/* theme.js — Toggle entre tema claro e escuro com persistência */

/* IIFE executado imediatamente (antes do DOMContentLoaded) para evitar
   flash do tema errado no carregamento da página */
(function () {
  var saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
})();

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('themeToggle');
  if (!btn) return;

  /* Atualiza o ícone do botão conforme o tema atual */
  function updateIcon() {
    var current = document.documentElement.getAttribute('data-theme');
    btn.textContent = current === 'dark' ? '☀️' : '🌙';
  }

  updateIcon();

  btn.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon();
  });
});
