function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var num;

		while( respuesta == 'si'){
		num = parseInt(prompt('INGRESE NUMERO'));
		contador = num + contador;
		acumulador = acumulador + 1;
		respuesta = prompt('DESEA CONTIUNAR?');
	}




document.getElementById('suma').value=contador;
document.getElementById('promedio').value=contador/acumulador;

}
