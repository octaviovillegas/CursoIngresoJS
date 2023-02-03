// Angel Farina.

function mostrarAumento()
{
	var importe;
	var result;
	var bis;
	
	importe=txtIdImporte.value;
	//result=parseInt(importe)-parseInt(importe*25)/100;

	// bis
	bis=prompt("Ingrese el porcentaje a calacular")
	result=parseInt(importe)-parseInt(importe*bis)/100;
	
	txtIdResultado.value=result;
}