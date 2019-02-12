function mostrar()
{
//tomo la edad  
	var  laEdad;

	laEdad = edad.value;
	laEdad = parseInt(laEdad);

	/*if(! (laEdad > 13 && laEdad < 17)) 
	{
		alert("Usted No es adolescente");
	}*/
	
	if( laEdad < 13 || laEdad > 17)
	{
		alert("Usted No es adolescente");
	}

}//FIN DE LA FUNCIÓN