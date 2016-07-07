function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var numeroRandom=Math.floor((Math.random()*10)+1);
if(numeroRandom>=9)
{
	document.getElementById('elNombre').value="EXCELENTE";
}	
else
{
	if(numeroRandom>=4)
	{
		document.getElementById('elNombre').value="APROBO"
	}
	else
	{
		document.getElementById('elNombre').value="Vamos, la proxima se puede";
	}
}
}//FIN DE LA FUNCIÓN