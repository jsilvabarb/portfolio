/* contato.js — Validação e simulação de envio do formulário de contato */

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');
  var modal = document.getElementById('successModal');
  var modalClose = document.getElementById('modalClose');

  /* Valida formato de e-mail com expressão regular */
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* Adiciona classe de erro e exibe mensagem inline no campo */
  function setError(groupId, message) {
    var group = document.getElementById(groupId);
    group.classList.add('error');
    group.querySelector('.field-error').textContent = message;
  }

  /* Remove estado de erro do campo */
  function clearError(groupId) {
    document.getElementById(groupId).classList.remove('error');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault(); /* impede recarregamento da página */

    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var mensagem = document.getElementById('mensagem').value.trim();
    var valid = true;

    /* Limpa erros anteriores antes de revalidar */
    clearError('group-nome');
    clearError('group-email');
    clearError('group-mensagem');

    if (!nome) {
      setError('group-nome', 'Nome é obrigatório.');
      valid = false;
    }

    if (!email) {
      setError('group-email', 'E-mail é obrigatório.');
      valid = false;
    } else if (!validateEmail(email)) {
      setError('group-email', 'Informe um e-mail válido (ex: usuario@dominio.com).');
      valid = false;
    }

    if (!mensagem) {
      setError('group-mensagem', 'Mensagem é obrigatória.');
      valid = false;
    }

    if (!valid) return;

    /* Simulação de envio: limpa formulário e exibe modal de sucesso */
    form.reset();
    modal.classList.add('active');
  });

  /* Fecha o modal pelo botão */
  modalClose.addEventListener('click', function () {
    modal.classList.remove('active');
  });

  /* Fecha o modal clicando fora dele */
  modal.addEventListener('click', function (e) {
    if (e.target === modal) modal.classList.remove('active');
  });
});
