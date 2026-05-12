/* menu.js — Menu hambúrguer responsivo para mobile */

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  /* Abre ou fecha o menu ao clicar no ícone hambúrguer */
  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
  });

  /* Fecha o menu automaticamente ao clicar em qualquer link */
  links.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('open');
    });
  });
});
