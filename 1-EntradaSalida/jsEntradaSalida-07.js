// Angel Farina.

function sumar()
{	
	let nUno=txtIdNumeroUno.value
	let nDos=txtIdNumeroDos.value

	let result=parseInt(nUno)+parseInt(nDos);

	alert(`El resultado es ${result}`);	
}

function restar()
{
	let nUno=txtIdNumeroUno.value
	let nDos=txtIdNumeroDos.value

	let result=parseInt(nUno)-parseInt(nDos);

	alert(`El resultado es ${result}`);
}

function multiplicar()
{ 
	let nUno=txtIdNumeroUno.value
	let nDos=txtIdNumeroDos.value

	let result=parseInt(nUno)*parseInt(nDos);

	alert(`El resultado es ${result}`);
}

function dividir()
{
	let nUno=txtIdNumeroUno.value
	let nDos=txtIdNumeroDos.value

	let result=parseInt(nUno)/parseInt(nDos);

	alert(`El resultado es ${result}`);
}

/*callback
function mostrar(valor,desc)
{
	alert(desc + valor);
}
function cuenta(opera,callback)
{
	console.log(opera);
	let descrip = "";
	nUno=txtIdNumeroUno.value;
	nDos=txtIdNumeroDos.value;
	if(opera==1)
	{
		let sum=parseInt(nUno)+parseInt(nDos);
        descrip = "El resultado es ";
	}
	if(opera==2)
	{
		let sum=parseInt(nUno)-parseInt(nDos);
		descrip = "El resultado es ";
	}
	if(opera==3)
	{
		let sum=parseInt(nUno)*parseInt(nDos);
		descrip = "El resultado es ";
	}
	if(opera==4)
	{
		let sum=parseInt(nUno)/parseInt(nDos);
		descrip = "El resultado es ";
	}
	callback(sum,descrip);
}*/