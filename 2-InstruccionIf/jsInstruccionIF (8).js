function mostrar()
{
//tomo la edad  
	var laEdad;
	var elEstadoCivil;

	laEdad = document.getElementById('edad').value;
	elEstadoCivil = document.getElementById('estadoCivil').value;

	if (laEdad > 17 || elEstadoCivil == Soltero)
	{
		alert("Es soltero y no es menor");
	}
	
}//FIN DE LA FUNCIÓN