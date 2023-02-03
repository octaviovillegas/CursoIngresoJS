// Angel Farina.

function mostrar()
{
	var contador;
	var acumulador;

	contador=0;
	acumulador=0;
	
	while (contador<5){
		contador++;
		acumulador=acumulador+parseInt(prompt('Ingrese un numero'));
	}
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}