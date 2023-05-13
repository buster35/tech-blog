const loginFormHandler = async function(event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#email-input-login').value.trim();
  const passwordEl = document.querySelector('#password-input-login').value.trim();

  const response = await fetch('/api/users/login', { //POST request to API endpoint; correct//
    method: 'POST',
    body: JSON.stringify({
      email: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

document
  .getElementById('login-form')
  .addEventListener('submit', loginFormHandler);
