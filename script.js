// Fade-in with IntersectionObserver (skip hero)
const fadeElements = document.querySelectorAll('.fade-in:not(.hero)');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

fadeElements.forEach(el => observer.observe(el));

// Mobile menu toggle
const navToggle = document.createElement('button');
navToggle.textContent = '☰';
navToggle.className = 'menu-toggle';
document.querySelector('nav').prepend(navToggle);

navToggle.addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('show');
});

// Click animation
document.querySelectorAll('.play-button, a').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('clicked');
    setTimeout(() => button.classList.remove('clicked'), 150);
  });
});


