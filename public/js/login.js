const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-input-login").value.trim();
  const password = document.querySelector("#password-input-login").value.trim();

  if (email && password) {
    const response = await fetch("api/users/login", {
      //POST request to API endpoint//
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

   //response is sending the status of the fetch request
    if (response.ok) {
      const body = await response.json()
      console.log(body)
      const id = body.userTrim.id
      console.log(id)
      document.location.replace(`/dashboard/${id}`); //GET route in homeRoutes.js
    } else {
      alert(response);
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
