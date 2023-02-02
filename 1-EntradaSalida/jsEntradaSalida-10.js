// Angel Farina.

function mostrarAumento()
{
	let importe=txtIdImporte.value

	let result=parseInt(importe)-parseInt(importe*25)/100;
	
	txtIdResultado.value=result;
}