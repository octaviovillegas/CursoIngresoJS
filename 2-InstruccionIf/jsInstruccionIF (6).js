function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
/*if(edad>17)
	{
		alert("Usted es mayor de edad");
	}
if(edad<=18&&edad>=13)
	{
		alert("Usted es adolescente");
	}
if(edad<13)
	{
		alert("Usted es niño");
	}
*/
/*
if(edad<13)
	{	
		alert("Es menor");
	}
if(edad<17&&edad>12)
	{
		alert("Es adolescente");
	}
	else
		{
			alert("Es mayor");
		}
*/
if(edad<13)
	{
		alert("Es menor");
	}
	else
	{
		if(edad>17)
		{
			alert("Es mayor");
		}
		else
		{
			alert("Es adolescente")
		}
	}	
// ASI ES COMO SE ESCRIBE, PQ OCUPO DOS LUGARES COMO MAXIMO!!!
}//FIN DE LA FUNCIÓN