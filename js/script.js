// script.js — Menú, reveals y accesibilidad
document.addEventListener('DOMContentLoaded', function () {
  // --- Menú hamburguesa para todos los botones ---
  const menuButtons = document.querySelectorAll('.btn-menu');

  menuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // obtener el nav asociado
      const navId = btn.getAttribute('aria-controls');
      const nav = document.getElementById(navId);
      if (!nav) return;

      // toggle menú abierto
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');

      // animar hamburguesa
      btn.classList.toggle('active');
    });
  });

  // --- Reveal on scroll ---
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  } else {
    // fallback si no hay IntersectionObserver
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // --- Cierra menú al cambiar a escritorio ---
  window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
      menuButtons.forEach(btn => {
        const navId = btn.getAttribute('aria-controls');
        const nav = document.getElementById(navId);
        if (nav) nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.classList.remove('active');
      });
    }
  });

  // --- Smooth scroll para enlaces internos ---
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // cerrar menú móvil si está abierto
      menuButtons.forEach(btn => {
        const navId = btn.getAttribute('aria-controls');
        const nav = document.getElementById(navId);
        if (nav && nav.classList.contains('open')) {
          nav.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
          btn.classList.remove('active');
        }
      });
    });
  });
});
