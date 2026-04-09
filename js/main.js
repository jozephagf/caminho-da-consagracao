// ================================================
//   Caminho da Consagração — Scripts globais
// ================================================

document.addEventListener('DOMContentLoaded', () => {

  // Fade-in ao rolar a página
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 100);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Botão voltar ao topo
  const backTop = document.getElementById('backTop');
  if (backTop) {
    window.addEventListener('scroll', () => {
      backTop.classList.toggle('show', window.scrollY > 400);
    });
  }

  // Menu mobile
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Filtros de artigos
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Formulário de contato
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('form-ok').style.display = 'block';
      form.querySelectorAll('input, textarea, select').forEach(f => f.value = '');
    });
  }

});
