
// funcion de login
function login() {
    if (document.getElementById("loginForm").checkValidity()) {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        
        var user = "prueba@prueba";
        var pass = "pas";
        if (email === user && password === pass) {
            // Redirigir al usuario a la página principal
            window.location.assign("../../sub-pages/privado.html")
            alert("Inicio de sesión exitoso")
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    } else {
        alert("Por favor, complete todos los campos.");
    }
}
//boton calcular
var button = document.getElementById("myButton");

// Agregar un escuchador de eventos al botón
button.addEventListener("click", function() {
  // Llamar a la primera función
  calculate();
  // Llamar a la segunda función
  capturarDatos();
});

