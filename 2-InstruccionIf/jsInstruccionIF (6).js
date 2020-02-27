function mostrar()
{
//tomo la edad  
	var laEdad;

	laEdad = edad.value;

	laEdad = parseInt(laEdad);

	
	if (laEdad > 17) 
	
	{
	
		alert("Usted es mayor de edad");

	}

	else
	
		{
			
			if (laEdad < 13) 
			
			{

				alert("Usted es menor de edad");
			
			}

			else

				{

					if (laEdad > 12 && laEdad < 16) 
					
					{
					
						alert("Usted es adolescente");

					}
				
				}
		
		}	

	

}//FIN DE LA FUNCIÓN