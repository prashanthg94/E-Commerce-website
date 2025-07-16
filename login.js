// let username= document.getElementById("email");
// let password= document.getElementById("password");
// let submit= document.getElementById("submit");

// submit.addEventListener('click',(event)=>{
//     event.preventDefault();
//     let uname=username.value;
//     let pass=password.value;
//     let userprom= auth(uname,pass);
//     verify(userprom);
// });

// function auth(uname,pass){
//     return fetch('https://dummyjson.com/auth/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
    
//     username: 'kminchelle',
//     password: '0lelplR',
//     expiresInMins: 30, // optional, defaults to 60
//   }),
//   credentials: 'include' // Include cookies (e.g., accessToken) in the request
// })}
//  .then((res) => {
//     if (!res.ok) throw new Error("Invalid credentials");
//     return res.json();
//   });


// function verify(promise) {
//   promise
//     .then((user) => {
//       console.log(user);
//       alert("Login successful! Welcome " + user.username);
//     })
//     .catch((err) => {
//       alert("Login failed: " + err.message);
//     });
// }
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