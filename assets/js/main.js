
// funcion de login
const username = "admin";
const password = "1234";

document.getElementById("submitBtn").addEventListener("click", function() {
  const inputUsername = document.getElementById("username").value;
  const inputPassword = document.getElementById("password").value;

  if (inputUsername === username && inputPassword === password) {
    window.open("sub-pages/privado.html", "_blank");
  } else {
    alert("Nombre de usuario o contraseña incorrectos");
  }
});
