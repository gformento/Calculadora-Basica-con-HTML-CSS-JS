alert("Hey! Bienvenido a la calculadora que eh creado con JS!");
alert("Espero que pueda serte de utilidad! Gracias por utilizarla! :) ");
alert("A continuación, elije la operacion que deseas realizar!");
//----------------------------------------------------------------
const btnSumar = document.getElementById("suma");
const btnRestar = document.getElementById("resta");
const btnMultiplicar = document.getElementById("multiplica");
const btnDividir = document.getElementById("divide");
const btnSalir = document.getElementById("btnSalir");
//----------------------------------------------------------------
btnSumar.addEventListener("click", suma);
btnRestar.addEventListener("click", resta);
btnMultiplicar.addEventListener("click", multiplica);
btnDividir.addEventListener("click", divide);
btnSalir.addEventListener("click", cerrar);
//----------------------------------------------------------------

function suma(){ 
  let txtn1 = prompt("Ingrese el numero 1:");
  let txtn2 = prompt("Ingrese el numero 2:");
  let op1 = parseFloat(txtn1);
  let op2 = parseFloat(txtn2);
  let resultado = op1 + op2;
  alert("El resultado de la suma entre: " + op1 + " y " + op2 + " es: " + resultado);
}
//----------------------------------------------------------------

function resta(){
  let txtn1 = prompt("Ingrese el numero 1:");
  let txtn2 = prompt("Ingrese el numero 2:");
  let op1 = parseFloat(txtn1);
  let op2 = parseFloat(txtn2);
  let resultado = op1 - op2;
  alert("El resultado de la resta entre: " + op1 + " y " + op2 + " es: " + resultado);
}

//----------------------------------------------------------------
function multiplica(){
  let txtn1 = prompt("Ingrese el numero 1:");
  let txtn2 = prompt("Ingrese el numero 2:");
  let op1 = parseFloat(txtn1);
  let op2 = parseFloat(txtn2);
  let resultado = op1 * op2;
  alert("El resultado de la multiplicacion entre: " +op1 +" y " +op2 +" es: " + resultado);
}

//----------------------------------------------------------------
function divide(){
  let txtn1 = prompt("Ingrese el numero 1:");
  let txtn2 = prompt("Ingrese el numero 2:");
  let op1 = parseFloat(txtn1);
  let op2 = parseFloat(txtn2);
  let resultado = op1 / op2;
  alert("El resultado de la divicion entre: " +op1 + " y " + op2 +" es: " + resultado);
}

//----------------------------------------------------------------
function cerrar(){
  window.open("", "_parent", ""); 
  window.close();
} 
  


