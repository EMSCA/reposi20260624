const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.querySelector('#year');
const contactForm = document.querySelector('#contactForm');
const formStatus = document.querySelector('.form-status');

year.textContent = new Date().getFullYear();

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get('name');

  formStatus.textContent = `Thank you, ${name}. Your message is ready to connect to an email or CRM service.`;
  contactForm.reset();
});
