function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;
	var recorrido;
	var acumulador = 0;

	//numeroIngresado = prompt(numeroIngresado);

	numeroIngresado = parseInt(numeroIngresado);


var repetciones = prompt("ingrese el número de repeticiones");


	for (recorrido = numeroIngresado - 1; recorrido > 1 ; recorrido -- ) 
	{
		for(numeroAnterior = recorrido - 1; numeroAnterior > 0; numeroAnterior --) 
		{

			console.log("no es perfecto" + numeroIngresado); 


			if (numeroIngresado % numeroAnterior == 0) 
			{
				acumulador = acumulador + numeroAnterior;
 			}

		}

		if(numeroAnterior == 1) 
		{
			console.log("es perfecto" + numeroIngresado); 
			
			/*else if (numeroAnterior != 1) 
			{
				console.log("no es primo");
					//exprime
			}*/

		}
	}

}//FIN DE LA FUNCIÓN