/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
	let numero2;
	let numeroparseado1;
	let numeroparseado2;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numeroparseado1 = parseInt(numero1);
	numeroparseado2 = parseInt(numero2);

	respuesta = "la suma es = "+ (numeroparseado1 + numeroparseado2);

	alert(respuesta);
	
}

