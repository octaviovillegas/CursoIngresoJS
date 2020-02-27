function mostrar()
{

	/*var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta == 'si' || (respuesta == "SI"))
	{	
		acumulador = acumulador + parseInt(prompt("dame un numero para SUMAR y sacar PROMEDIO ..."));
		respuesta  = prompt(" **ingrese SI para seguir ingresando datos** ");
		contador = contador + 1;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;*/




var contador = 0;
var acumulador = 0;
var numero;
var respuesta = "si";

while (respuesta = contador) 
{
	numero = prompt("ingrese numero");
	numero = parseInt(numero);
	contador = contador + 1;
	acumulador = acumulador + numero;
	respuesta = prompt("desea seguir?");
}

document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = acumulador / contador;




































}//FIN DE LA FUNCIÓN