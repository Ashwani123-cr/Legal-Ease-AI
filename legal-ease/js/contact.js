// contact.js — form submission handler

const submitBtn = document.getElementById('submit-btn');
const successMsg = document.getElementById('success-msg');

if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    const fname = document.getElementById('fname').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!fname || !email || !message) {
      alert('Please fill in your name, email, and message before sending.');
      return;
    }

    // Show success message
    successMsg.style.display = 'block';

    // Reset form fields
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';

    // Hide success message after 4 seconds
    setTimeout(() => {
      successMsg.style.display = 'none';
    }, 4000);
  });
}
