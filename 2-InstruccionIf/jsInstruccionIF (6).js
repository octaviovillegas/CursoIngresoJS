function Mostrar()
{
//tomo la edad  
var años;
años=document.getElementById('edad').value;
if (años>=18) 
{
	console.log("Mayor de edad");
}
else 
{
	if (años>=13)
	{
		console.log("Adolescente");
	}
	else 
	{
		console.log("niño");
	}
}
}//FIN DE LA FUNCIÓN