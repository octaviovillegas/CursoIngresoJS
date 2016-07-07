function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
if(edad>17)
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
}//FIN DE LA FUNCIÓN