/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
	let numero1;
	let numero2;
	let suma;
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	suma = numero1 + numero2;
	
	alert("El resultado es " + suma);
}

function restar() {

	let numero1;
	let numero2;
	let resta;
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);
	resta = numero1 - numero2;
	alert(resta);
}

function multiplicar() {
	let numero1;
	let numero2;
	let multiplicacion;
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);
	multiplicacion = numero1 * numero2

	alert(multiplicacion);
}


function dividir() {
	let numero1;
	let numero2;
	let division;
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);
	division = numero1 / numero2;
	alert("El resultado es " + division);
}

