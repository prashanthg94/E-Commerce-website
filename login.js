document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();

  const username = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  console.log("Trying to login with:", username, password);

  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
      expiresInMins: 30
    }),
  })
  .then((res) => {
    if (!res.ok) return res.json().then(err => { throw new Error(err.message) });
    return res.json();
  })
  .then((data) => {
    alert("Login successful! Welcome, " + data.username);
    console.log("Token:", data.accessToken);
  })
  .catch((err) => {
    alert("Login failed: " + err.message);
    console.error(err);
  });
})

