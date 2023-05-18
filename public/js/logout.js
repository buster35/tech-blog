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

document.querySelector("#logout-link").addEventListener("click", logout);
