
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
//boton calcular
var button = document.getElementById("myButton");

// Agregar un escuchador de eventos al botón
button.addEventListener("click", function() {
  // Llamar a la primera función
  calculate();
  // Llamar a la segunda función
  capturarDatos();
});

