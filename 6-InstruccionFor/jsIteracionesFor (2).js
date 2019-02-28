function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;

	numeroIngresado = prompt(numeroIngresado);

	numeroIngresado = parseInt(numeroIngresado);


	/*for(numeroAnterior = numeroIngresado - 1; numeroAnterior > 1; numeroAnterior --) 
	{

		console.log(numeroAnterior);

		if (numeroIngresado % numeroAnterior == 0) 
		{
			console.log("es primo");
			
			break;
		}

	}

	if(numeroAnterior == 1) 
	{
		console.log("es primo"); 
		
		else 
		{
			alert("no es primp");
				//exprime
		}
	}*/

	for (recorrido = numeroIngresado - 1; recorrido > 1 ; recorrido -- ) 
	{
		for(numeroAnterior = recorrido - 1; numeroAnterior > 1; numeroAnterior --) 
		{

			console.log(numeroAnterior);

			if (numeroIngresado % numeroAnterior == 0) 
			{
				break;
			}

		}

		if(numeroAnterior == 1) 
		{
			console.log("es primo" + recorrido); 
			
			/*else if (numeroAnterior != 1) 
			{
				console.log("no es primo");
					//exprime
			}*/

		}
	}




























}