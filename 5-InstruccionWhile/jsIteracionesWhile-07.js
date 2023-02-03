// Angel Farina.

function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	
	contador=0;
	acumulador=0;
	respuesta='si';

	while (respuesta=='si'){
		contador++;
		acumulador=acumulador+parseInt(prompt('Ingrese un número'));
		respuesta=prompt('sumar otro numero?');
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
}