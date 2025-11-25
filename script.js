
document.getElementById('year').textContent = new Date().getFullYear();

// Simple client-side handler for demo
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  alert(`Thanks, ${data.name}! Your message was captured locally.

Email: ${data.email}
Message: ${data.message}`);
  form.reset();
});
