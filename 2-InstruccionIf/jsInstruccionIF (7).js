function Mostrar()
{
//tomo la edad  
var años
var civil
civil=document.getElementById('estadoCivil').value
años=document.getElementById('edad').value;
	if (años<18 && civil!="Soltero") 
	{
		alert("Es muy pequeño para ser soltero");
	}
}//FIN DE LA FUNCIÓN