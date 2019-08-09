function mostrar()
{

	var contadorCeros = 0;
	var negativos = 0;
	var positivos = 0;
	var promedioN ;
	var promedioP ;
	var contadorP = 0;
	var contadorN = 0;
	var contadorPar = 0;
	var respuesta="si";
	var diferencia ;


		do{
		numero = parseInt(prompt('INGRESE NUMERO'));

		respuesta = prompt('DESEA CONTINUAR?');

		if(numero < 0 ){
			negativos = numero + negativos;
			contadorN = contadorN + 1;
			promedioN = negativos / contadorN;

		}

		else if(numero > 0){
			positivos = numero + positivos;
			contadorP = contadorP + 1;
			promedioP = positivos / contadorP;

		}

		else if( numero%2 == 0){
			contadorPar = contadorPar + 1;

		}

		if (numero == 0){
			contadorCeros = contadorCeros + 1;

		}

		diferencia = negativos + positivos;

	} while(respuesta == 'si');

	alert ('la suma de negativos es ' + negativos + ' hay ' + contadorN + ' numeros negativos');
	alert ('la suma de positivos es ' + positivos + ' hay ' + contadorP + ' numeros positivos');
	alert ('hay ' + contadorCeros +  ' numeros ceros');
	alert ('hay ' + contadorPar +  ' numeros pares');
	alert ('el promedio de positivos es de ' + promedioP);
	alert ('el promedio de negativos es de ' + promedioN);
	alert ('la diferencia entre positivos y negativos es ' + diferencia);


}//FIN DE LA FUNCIÓN
