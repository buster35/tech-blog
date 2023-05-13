const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-input-login").value.trim();
  const password = document.querySelector("#password-input-login").value.trim();

  if (email && password) {
    const response = await fetch("api/users/login", {
      //POST request to API endpoint; correct//
      method: "POST",
      body: JSON.stringify({
        email,
        password
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard"); //GET route in homeRoutes.js
    } else {
      alert(response);
      console.log(response) //working
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
