function calculate() {
  let monto = document.getElementById("monto").value;
  let meses = document.getElementById("meses").value;
  let monto1 = parseInt(monto)
  let meses1 = parseInt(meses) 
  let interest = calculateInterest(monto1, meses1);
  if (interest === "Ingrese la cantidad de meses") {
    document.getElementById("pagoMes").innerHTML = interest;
  } else {
    let pagoMes1 = interest.toLocaleString();
    document.getElementById("pagoMes").innerHTML = "";
    document.getElementById("spinner").classList.remove("d-none");
    setTimeout(function() {
    document.getElementById("pagoMes").innerHTML = "$" + pagoMes1;
    document.getElementById("spinner").classList.add("d-none")
    }, 2000);
    console.log("el monto de las cuotas por mes es de:  ${pagoMes1}")
  }
}


function calculateInterest(monto1, meses1) {
  let rate;
  if (meses1 === 12) {
    rate = 0.11627;
  } else if (meses1 === 18) {
    rate = 0.08875;
  } else if (meses1 === 24) {
    rate = 0.07539;
  } else if (meses1 === 36) {
      rate = 0.06278;
  } else if (meses1 === 48) {
      rate = 0.05717;
  } else if (meses1 === 60) {
      rate = 0.05427;
  } else {
    rate = 0;
    return "Ingrese la cantidad de meses";
  }
  return monto1 * rate;
}


