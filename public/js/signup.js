async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value
  const email = document.querySelector("#email-signup").value
  const password = document.querySelector("#password-signup").value
  //Send fetch request to controller to add a new user to the model
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard"); //working
    } else {
      alert(response);
    }
  };

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
