/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	nUno=txtIdNumeroUno.value
	nDos=txtIdNumeroDos.value

	result = parseInt(nUno)+parseInt(nDos);

	alert('El resultado es '+ result);	
}

function restar()
{
	nUno=txtIdNumeroUno.value
	nDos=txtIdNumeroDos.value

	result = parseInt(nUno)-parseInt(nDos);

	alert('El resultado es '+ result);
}

function multiplicar()
{ 
	nUno=txtIdNumeroUno.value
	nDos=txtIdNumeroDos.value

	result = parseInt(nUno)*parseInt(nDos);

	alert('El resultado es '+ result);
}

function dividir()
{
	nUno=txtIdNumeroUno.value
	nDos=txtIdNumeroDos.value

	result = parseInt(nUno)/parseInt(nDos);

	alert('El resultado es '+ result);
}
