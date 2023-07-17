const userPassword = document.getElementById('user-password');
const repeatPassword = document.getElementById('repeat-password');
const passwordMessage = document.getElementById('password-message');

function validatePassword() {
  if (userPassword.value !== repeatPassword.value) {
    passwordMessage.textContent = "Passwords didn't match";
  } else {
    passwordMessage.textContent = "";
  }
}

userPassword.addEventListener('input', validatePassword);
repeatPassword.addEventListener('input', validatePassword);
