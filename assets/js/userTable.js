

function capturarDatos() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var dni = document.getElementById("dni").value;
    var celular = document.getElementById("celular").value;
    var email = document.getElementById("emailCliente").value;
    var direccion = document.getElementById("direccion").value;
    var localidad = document.getElementById("localidad").value;
    var provincia = document.getElementById("provincia").value;
    var codigoPostal = document.getElementById("codigoPostal").value;
    var monto = document.getElementById("monto").value;
    var meses = document.getElementById("meses").value;
    var cuota = document.getElementById("pagoMes").value;
    var datos = {
        "nombre": nombre,
        "apellido": apellido,
        "fechaNacimiento": fechaNacimiento,
        "dni": dni,
        "celular": celular,
        "email": email,
        "direccion": direccion,
        "localidad": localidad,
        "provincia": provincia,
        "codigoPostal": codigoPostal,
        "monto": monto,
        "meses": meses,
        "cuota": cuota
    };
    var userData = [];
    var storedData = localStorage.getItem("userData");
    if (storedData) {
        userData = JSON.parse(storedData);
    }
    userData.push(datos);
    localStorage.setItem("userData", JSON.stringify(userData));
}

function createUserTable(userData) {
    
    var storedData = localStorage.getItem("userData");
    if (storedData) {
        userData = JSON.parse(storedData);
    } else {
        return;
    }

    for (var i = 0; i < userData.length; i++) {
    var user = userData[i];
    var tableRow = document.createElement("tr");

    var nombreCell = document.createElement("td");
    nombreCell.innerHTML = user.nombre;
    tableRow.appendChild(nombreCell);

    var apellidoCell = document.createElement("td");
    apellidoCell.innerHTML = user.apellido;
    tableRow.appendChild(apellidoCell);

    var fechaNacimientoCell = document.createElement("td");
    fechaNacimientoCell.innerHTML = user.fechaNacimiento;
    tableRow.appendChild(fechaNacimientoCell);

    var dniCell = document.createElement("td");
    dniCell.innerHTML = user.dni;
    tableRow.appendChild(dniCell);

    var celularCell = document.createElement("td");
    celularCell.innerHTML = user.celular;
    tableRow.appendChild(celularCell);

    var emailCell = document.createElement("td");
    emailCell.innerHTML = user.email;
    tableRow.appendChild(emailCell);

    var direccionCell = document.createElement("td");
    direccionCell.innerHTML = user.direccion;
    tableRow.appendChild(direccionCell);

    var localidadCell = document.createElement("td");
    localidadCell.innerHTML = user.localidad;
    tableRow.appendChild(localidadCell);

    var provinciaCell = document.createElement("td");
    provinciaCell.innerHTML = user.provincia;
    tableRow.appendChild(provinciaCell);

    var codigoPostalCell = document.createElement("td");
    codigoPostalCell.innerHTML = user.codigoPostal;
    tableRow.appendChild(codigoPostalCell);

    var montoCell = document.createElement("td");
    montoCell.innerHTML = user.monto;
    tableRow.appendChild(montoCell);

    var mesesCell = document.createElement("td");
    mesesCell.innerHTML = user.meses;
    tableRow.appendChild(mesesCell);

    var cuotaCell = document.createElement("td");
    cuotaCell.innerHTML = user.cuota;
    tableRow.appendChild(cuotaCell);
    document.getElementById("userData").appendChild(tableRow);
    }
}