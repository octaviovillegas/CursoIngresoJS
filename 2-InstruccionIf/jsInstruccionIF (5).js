function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
/*
if(edad<13||edad>17)
	{
		alert("Usted no es adolescente");
	}
*/
/*
if(edad>=13&&edad<=17)
	{

	}
else
	{
		alert("Usted no es adolescente");
	}
*/
/*
if(edad<=17)
	{
		if (edad>=13)
			{
				
			}	
		else
			{
				alert("Usted no es adolescente");
			}
	}
else
	{
		alert("Usted no es adolescente");
	}	
*/
if(edad>17)
{
	alert("Usted no es adolescente");
}	
else
{
	if(edad<13)
	{
		alert("Usted no es adolescente");
	}
}
}//FIN DE LA FUNCIÓN