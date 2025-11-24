const scrollLinks = document.querySelectorAll('a[href^="#"]');
const accordionButtons = document.querySelectorAll('.accordion-item');
const yearEl = document.getElementById('year');

scrollLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      event.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

accordionButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    if (!target) return;

    target.classList.toggle('active');
    target.style.maxHeight = target.classList.contains('active')
      ? `${target.scrollHeight}px`
      : 0;
  });
});

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
