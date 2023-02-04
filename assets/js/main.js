
// funcion de login
const username = "admin";
const password = "1234";

document.getElementById("submitBtn").addEventListener("click", function() {
  const inputUsername = document.getElementById("username").value;
  const inputPassword = document.getElementById("password").value;

  if (inputUsername === username && inputPassword === password) {
    bien();
  } else {
    mal();
  }
});

// sweet alert

function enviar(){
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: '¿Estas Seguro?',
    text: "¿Enviar formulario?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, Enviar',
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
        capturarDatos()
      swalWithBootstrapButtons.fire(
        'Enviado',
        'Nos comunicaremos contigo a la brevedad.',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'No se ha enviado ningún dato',
        'error'
      )
    }
  })
}

function mal(){
Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Revisa los datos ingresados.',

  })
}

    let timerInterval
function bien(){
    Swal.fire({
        icon: 'success',
        title: 'Bienvenido Administrador',
        html: 'Lo estamos redirigiendo. Aguarde...',
        timer: 2500,
        timerProgressBar: true,
        didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
        }, 100)
    },
        willClose: () => {
        clearInterval(timerInterval)
        window.location.assign("sub-pages/privado.html");
    }
    }).then((result) => {
      /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
        console.log('se cerro el alert')
        }
    })
}


//modificador de numeros segun barra

function displayValue(value) {
    let stringValue = value.toString();
    let result = '';
    let count = 0;

    for (let i = stringValue.length - 1; i >= 0; i--) {
        count++;
        result = stringValue[i] + result;
        if (count === 3 && i > 0) {
            result = '.' + result;
            count = 0;
        }
        }
    document.getElementById("valor").innerHTML = "$" + result;
}
