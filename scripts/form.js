// scripts/form.js

// Grab form elements
const form = document.getElementById('demo-form');
const nameInput = form.name;
const emailInput = form.email;
const companyInput = form.company;
const messageInput = form.message;

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const feedback = document.getElementById('form-feedback');

// Email validation regex
function validateEmail(email) {
  const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
}

// Submit event
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  let valid = true;

  // Reset errors and styles
  nameError.classList.add('hidden');
  emailError.classList.add('hidden');
  feedback.textContent = '';
  feedback.className = '';
  nameInput.classList.remove('border-red-500');
  emailInput.classList.remove('border-red-500');

  // Name validation
  if (!nameInput.value.trim()) {
    nameError.classList.remove('hidden');
    nameInput.classList.add('border-red-500');
    valid = false;
  }

  // Email validation
  if (!validateEmail(emailInput.value.trim())) {
    emailError.classList.remove('hidden');
    emailInput.classList.add('border-red-500');
    valid = false;
  }

  if (!valid) return;

  // Simulate submission
  feedback.textContent = 'Submitting...';
  feedback.classList.add('text-blue-600');

  try {
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API call

    feedback.textContent = '✅ Thank you! We will contact you soon.';
    feedback.classList.remove('text-blue-600');
    feedback.classList.add('text-green-600');

    form.reset();
  } catch (error) {
    feedback.textContent = '❌ Something went wrong. Please try again.';
    feedback.classList.remove('text-blue-600');
    feedback.classList.add('text-red-600');
  }
});
