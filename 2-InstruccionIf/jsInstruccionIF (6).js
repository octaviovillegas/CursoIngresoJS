function Mostrar()
{
//tomo la edad  
var años;
años=document.getElementById('edad').value;
if (años>=18) 
{
	console.log("Mayor de edad")
}
else (años>=13 && años<=17)
{
	console.log("Adolescente")
}
else (años<13)
{
	console.log("Niño")
}
}//FIN DE LA FUNCIÓN