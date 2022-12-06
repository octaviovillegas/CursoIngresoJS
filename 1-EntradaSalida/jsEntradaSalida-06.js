/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	nUno=txtIdNumeroUno.value
	nDos=txtIdNumeroDos.value

	result=parseInt(nUno)+parseInt(nDos);

	alert(`El resultado es ${result}`);
}

