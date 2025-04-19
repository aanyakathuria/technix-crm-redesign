// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Form validation and submission
const form = document.getElementById('demo-form');

if (form) {
  const nameInput = form.name;
  const emailInput = form.email;
  const companyInput = form.company;
  const messageInput = form.message;
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const feedback = document.getElementById('form-feedback');

  // Email validation regex
  function validateEmail(email) {
    const re = /^[\w.-]+@([\w-]+\.)+[\w-]{2,}$/;
    return re.test(email);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    // Reset errors
    feedback.textContent = '';
    nameError.classList.add('hidden');
    emailError.classList.add('hidden');

    // Name check
    if (!nameInput.value.trim()) {
      nameError.classList.remove('hidden');
      valid = false;
    }

    // Email check
    if (!validateEmail(emailInput.value.trim())) {
      emailError.classList.remove('hidden');
      valid = false;
    }

    if (!valid) return;

    // Simulate submission
    feedback.textContent = 'Submitting...';
    setTimeout(() => {
      feedback.textContent = 'Thank you for your interest! We will get back to you soon.';
      form.reset();
    }, 1500);
  });
}
