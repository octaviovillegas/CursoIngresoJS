function mostrar()
{
//tomo la edad  

	var laEdad;

	laEdad = edad.value;
	laEdad = parseInt(laEdad);

   if (laEdad > 17) 
   		{
		alert("Usted es mayor");
		
		else
   		{
   			alert("Usted es menor");
   		}
		}
   
   	if (laEdad > 13 && laEdad < 17) 
   		{
   			alert("Usted es adolescente");
   		}



}//FIN DE LA FUNCIÓN