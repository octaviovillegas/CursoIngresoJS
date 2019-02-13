function mostrar()
{
//tomo la edad  
	var laEdad;
	var elEstadoCivil;

	//laEdad = edad.value;
	//elEstadoCivil = estadoCivil.value;

	laEdad = document.getElementById('edad').value;
	elEstadoCivil = document.getElementById('estadoCivil').value;

	//laEdad = parseInt(laEdad);
	//elEstadoCivil = parseInt(elEstadoCivil);

	if (laEdad < 18 || elEstadoCivil == Divorciado == Casado)
	{
		alert("Es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN