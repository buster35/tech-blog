const logout = async () => {
  const response = await fetch("api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
    alert("Successfully logged out");
  } else {
    alert("User is already logged out");
  }
};

const loginAlert = async () => {
  const response = await fetch("/login", {
    method: "GET",
    headers: {},
  })

  if (response.ok) {
    alert("You are already logged in.")
  }
}

document.querySelector("#logout-link").addEventListener("click", logout);

document.querySelector(".main-login").addEventListener("click", loginAlert);
