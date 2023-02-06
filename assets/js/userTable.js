var firebaseConfig = {
    apiKey: "AIzaSyAcbcO1Fi6cOWtFGBkKoGdysuLejEI4BjU",
    authDomain: "creditos-376918.firebaseapp.com",
    databaseURL: "https://creditos-376918-default-rtdb.firebaseio.com",
    projectId: "creditos-376918",
    storageBucket: "creditos-376918.appspot.com",
    messagingSenderId: "443944082961",
    appId: "1:443944082961:web:3afd04f1c67af243568fb9"
    };

    
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
        // Envia los datos a Firebase
        database.ref().push(datos);
    
        // Almacena los datos en el local storage
        var userData = [];
        var storedData = localStorage.getItem("userData");
        if (storedData) {
            userData = JSON.parse(storedData);
        }
        userData.push(datos);
        localStorage.setItem("userData", JSON.stringify(userData));
    }

    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();
    function createUserTable() {
        var userData = [];
        var table = document.getElementById("user-table");
        database.ref().once("value", function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var user = childSnapshot.val();
                userData.push(user);
            });
        
            for (var i = 0; i < userData.length; i++) {
                var row = table.insertRow(i + 1);
                var nombreCell = row.insertCell(0);
                var apellidoCell = row.insertCell(1);
                var fechaNacimientoCell = row.insertCell(2);
                var dniCell = row.insertCell(3);
                var celularCell = row.insertCell(4);
                var emailCell = row.insertCell(5);
                var direccionCell = row.insertCell(6);
                var localidadCell = row.insertCell(7);
                var provinciaCell = row.insertCell(8);
                var codigoPostalCell = row.insertCell(9);
                var montoCell = row.insertCell(10);
                var mesesCell = row.insertCell(11);
                var cuotaCell = row.insertCell(12);
                nombreCell.innerHTML = userData[i].nombre;
                apellidoCell.innerHTML = userData[i].apellido;
                fechaNacimientoCell.innerHTML = userData[i].fechaNacimiento;
                dniCell.innerHTML = userData[i].dni;
                celularCell.innerHTML = userData[i].celular;
                emailCell.innerHTML = userData[i].email;
                direccionCell.innerHTML = userData[i].direccion;
                localidadCell.innerHTML = userData[i].localidad;
                provinciaCell.innerHTML = userData[i].provincia;
                codigoPostalCell.innerHTML = userData[i].codigoPostal;
                montoCell.innerHTML = userData[i].monto;
                mesesCell.innerHTML = userData[i].meses;
                cuotaCell.innerHTML = userData[i].cuota;
                
            }
        });
    }