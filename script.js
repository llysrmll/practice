const correctPassword = 'secret123';

const passwordForm = document.getElementById('passwordForm');
const passwordInput = document.getElementById('passwordInput');
const passwordMessage = document.getElementById('passwordMessage');
const newLocal = document.getElementById('passwordSection');
const passwordSection = newLocal;
const dateSection = document.getElementById('dateSection');
const dateForm = document.getElementById('dateForm');
const dateInput = document.getElementById('dateInput');
const dateResult = document.getElementById('dateResult');

passwordForm.addEventListener('submit', function (event) {
  event.preventDefault();

  if (passwordInput.value === correctPassword) {
    passwordSection.classList.add('hidden');
    dateSection.classList.remove('hidden');
    passwordMessage.textContent = '';
    passwordInput.value = '';
  } else {
    passwordMessage.textContent = 'Incorrect password. Please try again.';
    passwordMessage.className = 'message error';
    passwordInput.value = '';
    passwordInput.focus();
  }
});

dateForm.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!dateInput.value) {
    dateResult.textContent = 'Please choose a valid date.';
    dateResult.classList.remove('hidden');
    return;
  }

  dateResult.textContent = 'Selected date: ' + dateInput.value;
  dateResult.classList.remove('hidden');
});
