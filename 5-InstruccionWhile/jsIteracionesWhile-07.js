
function mostrar()
{
	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while (respuesta=='si'){
		contador++;
		acumulador=acumulador+parseInt(prompt('Ingrese un número'));
		respuesta=prompt('sumar otro numero?');
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
}