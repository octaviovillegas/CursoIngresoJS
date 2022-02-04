/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1;
	let numero2;
	let numeroparseado1;
	let numeroparseado2;
	let respuesta;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numeroparseado1 = parseInt(numero1);
	numeroparseado2 = parseInt(numero2);

	respuesta = "La suma es de = "+(numeroparseado1 + numeroparseado2)
	alert(respuesta);
}

function restar()
{
	let numero1;
	let numero2;
	let numeroparseado1
	let numeroparseado2

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numeroparseado1 = parseInt(numero1);
	numeroparseado2 = parseInt(numero2);

	respuesta = "La resta es de = "+(numeroparseado1 - numeroparseado2);
	alert(respuesta);
}

function multiplicar()
{ 
	let numero1;
	let numero2;
	let numeroparseado1
	let numeroparseado2

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numeroparseado1 = parseInt(numero1);
	numeroparseado2 = parseInt(numero2);

	respuesta = "La multiplicacion es de = "+(numeroparseado1 * numeroparseado2);
	alert(respuesta);
}

function dividir()
{
	let numero1;
	let numero2;
	let numeroparseado1
	let numeroparseado2

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numeroparseado1 = parseInt(numero1);
	numeroparseado2 = parseInt(numero2);

	respuesta = "La division es de = "+(numeroparseado1 / numeroparseado2);
	alert(respuesta);
}

