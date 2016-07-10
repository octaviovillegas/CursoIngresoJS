function Mostrar()
{
//tomo la edad  
var edad=document.getElementById('edad').value;
var estadoCivil=document.getElementById('estadoCivil').value;
if(edad<18)
	{
		if(estadoCivil=="Soltero")
		{
		}
		else
		{
			alert("Es muy pequeño para NO ser soltero");
		}	
	}
/*else
	{

	}*/
}//FIN DE LA FUNCIÓN