function mostrar()
{

	var maximo;
	var minimo;
	var numero;
	var flag = 0;


	do {
		numero = parseInt(prompt('INGRESE NUMERO'));
		while(isNaN(numero)){
			numero = parseInt(prompt('NO ES UN NUMERO , INGRESE NUMERO'));
		}

		if (numero > maximo || flag == 0){
			maximo = numero;

		}

		if(numero < minimo || flag == 0){
			minimo = numero;
			flag = 1;
		}



	}while(confirm('DESEA CONTINUAR?'));


document.getElementById('maximo').value = maximo;
document.getElementById('minimo').value = minimo;

}//FIN DE LA FUNCIÓN
