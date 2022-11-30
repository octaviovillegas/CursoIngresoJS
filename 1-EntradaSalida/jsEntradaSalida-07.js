/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	nUno=txtIdNumeroUno.value
	nDos=txtIdNumeroDos.value

	result=parseInt(nUno)+parseInt(nDos);

	alert('El resultado es '+result);	
}

function restar()
{
	nUno=txtIdNumeroUno.value
	nDos=txtIdNumeroDos.value

	result=parseInt(nUno)-parseInt(nDos);

	alert('El resultado es '+result);
}

function multiplicar()
{ 
	nUno=txtIdNumeroUno.value
	nDos=txtIdNumeroDos.value

	result=parseInt(nUno)*parseInt(nDos);

	alert('El resultado es '+result);
}

function dividir()
{
	nUno=txtIdNumeroUno.value
	nDos=txtIdNumeroDos.value

	result=parseInt(nUno)/parseInt(nDos);

	alert('El resultado es '+result);
}

/*callback
function mostrar(valor,desc)
{
	alert(desc + valor);
}
function cuenta(opera,callback)
{
	console.log(opera);
	var descrip = "";
	nUno=txtIdNumeroUno.value;
	nDos=txtIdNumeroDos.value;
	if(opera==1)
	{
		var sum=parseInt(nUno)+parseInt(nDos);
        descrip = "El resultado es ";
	}
	if(opera==2)
	{
		var sum=parseInt(nUno)-parseInt(nDos);
		descrip = "El resultado es ";
	}
	if(opera==3)
	{
		var sum=parseInt(nUno)*parseInt(nDos);
		descrip = "El resultado es ";
	}
	if(opera==4)
	{
		var sum=parseInt(nUno)/parseInt(nDos);
		descrip = "El resultado es ";
	}
	callback(sum,descrip);
}*/