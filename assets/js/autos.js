let autos = [
    {marca: "volkswagen", modelo: "gol", anio: 2020, precio: 3400000, financiacion: 2300000},
    {marca: "renault", modelo: "sandero", anio: 2018, precio: 4400000, financiacion: 3500000},
    {marca: "chevrolet", modelo: "cruze", anio: 2019, precio: 5400000, financiacion: 4000000},
    {marca: "fiat", modelo: "cronos", anio: 2021, precio: 3700000, financiacion: 3000000},
    {marca: "volkswagen", modelo: "up", anio: 2015, precio: 3150000, financiacion: 2000000},
    ];
    
    function buscar(){
    
    let option = document.getElementById("searchOption").value;
    let criteria = document.getElementById("searchCriteria").value.toLowerCase();
    
    let result = [];
    if (option === "1") {
    result = autos.filter(function(objeto) {
    return objeto.marca.toLowerCase() == criteria;
    });
    } else if (option === "2") {
    result = autos.filter(function(objeto) {
    return objeto.modelo.toLowerCase() == criteria;
    });
    } else if (option === "3") {
    result = autos.filter(function(objeto) {
    return objeto.anio == criteria;
    });
    }
    
    let resultHTML = "";
    if (result.length > 0) {
    result.forEach(function(objeto) {
    resultHTML += "<p>Marca: " + objeto.marca + "<br>Modelo: " + objeto.modelo + "<br>Año: " + objeto.anio + "<br>Precio: $" + objeto.precio.toLocaleString() + "<br>Maximo a financiar: $" + objeto.financiacion.toLocaleString() +"</p>";
    });
    } else {
    resultHTML = "<p>No se encontraron resultados</p>";
    }
    
    document.getElementById("searchResults").innerHTML = resultHTML;
    }



    document.getElementById("toggleButton").addEventListener("click", function(){
        let list = document.getElementById("vehicleList");
        if (list.style.display === "none") {
          list.style.display = "block";
        } else {
          list.style.display = "none";
        }
      });
