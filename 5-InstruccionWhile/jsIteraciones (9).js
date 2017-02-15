function Mostrar()
{

	var contador=0;
	// declarar variables
	var maximo = 0;
	var minimo = 0;
	var respuesta='si';

	while(respuesta!='no')
	{
		var ingreso = parseInt(prompt("Ingrese un numero."));
			//OMITE UN VALOR INGRESADO QUE NO SEA DE TIPO Number
			if (!isNaN(ingreso)){
				if(ingreso > maximo){
					maximo = ingreso;
				}
				if(ingreso < minimo){
					minimo = ingreso;
				}
			}
			contador++;
			respuesta = prompt("¿Desea seguir? (si/no)");
			
	}

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN