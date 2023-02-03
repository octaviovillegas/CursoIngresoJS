// Angel Farina.

function mostrarAumento()
{
	var sueldo;
	var result;
	var bis;

	sueldo=txtIdSueldo.value;
	//result=parseInt(sueldo)+parseInt(sueldo*10)/100;

	//bis
	bis=prompt("Ingrese el porcentaje a calcular")
	result=parseInt(sueldo)+parseInt(sueldo*bis)/100;

	txtIdResultado.value=result;
}