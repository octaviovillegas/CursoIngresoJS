/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var num1;
var num2;
function sumar()
{	
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    var x = parseInt(num1);
    var y = parseInt(num2);
    var suma = x + y;
    alert("la suma es " + suma);
	
}

function restar()
{
	num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    var x = parseInt(num1);
    var y = parseInt(num2);
    var resta = x - y;
    alert("la resta es " + resta);
}

function multiplicar()
{ 
	num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    var x = parseInt(num1);
    var y = parseInt(num2);
    var multi = x * y;
    alert("la multiplicacion es " + multi);
}

function dividir()
{
	num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    var x = parseInt(num1);
    var y = parseInt(num2);
    var div = x / y;
    alert("la division es " + div);
}

