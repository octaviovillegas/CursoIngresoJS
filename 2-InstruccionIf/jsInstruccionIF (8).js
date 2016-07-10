function Mostrar()
{
//tomo la edad  
var edad=document.getElementById('edad').value;
var estadoCivil=document.getElementById('estadoCivil').value;
/*
if(edad<18)
{
	if(estadoCivil=="Soltero")
	{
	}
	else
	{
	}
}	
else
{
	if(estadoCivil=="Soltero")
	{
		alert("Es soltero y no es menor");
	}
	else
	{
	}
}
*/
/*
if(edad<18)
{
}	
else
{
	if(estadoCivil=="Soltero")
	{
		alert("Es soltero y no es menor")
	}	
	else
	{
	}
}
*/
if(edad>17)
{
	if(estadoCivil=="Soltero")
	{
		alert("Es soltero y no es menor");
	}
	/*else
	{
	}*/	
}
}//FIN DE LA FUNCIÓN