function mostrar()
{
	var sexo;
	var nota;
	var promedio;
	var total;
	var notaBajaSexo;
	var notaBaja;
	var contador = 0;
	var contadorVaron = 0;

	sexo = prompt("favor de ingresar sexo");
	nota = prompt("favor de ingresar nota");
	nota = parseInt(nota);
	notaBaja = 11;
	


	while(contador < 5)
	{
		
		while (sexo != "f" && sexo != "m") 
		{
			sexo = prompt("error, ingresar nuevamente sexo");
		}
	
		while (isNaN(nota) == true) 
		{
			nota = prompt("favor de ingresar nota");
			nota = parseInt(nota);
		}
		
		if (nota > 5 && sexo == "m") 
		{
			contadorVaron = contadorVaron + 1;

		}		
		
		total = total + nota; 
		
		if (notaBaja > nota) 
		{
			notaBaja = nota;
			notaBajaSexo = sexo;
		}

	}

	promedio = total / contador; 

	alert("Su promedio es: " + promedio);

	alert("Nota mas baja: " + notaBaja + " sexo de nota mas baja: " + notaBajaSexo);

	alert("Cantidad de barones que hayan sacado mas que 5: " + contadorVaron);

	 





















	}

	//alert(contador);
