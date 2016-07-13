function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var numeroRandom=Math.floor((Math.random()*10)+1);
if(numeroRandom>=9)
{
	alert("EXCELENTE: "+numeroRandom);
}	
else
{
	if(numeroRandom>=4)
	{
		alert("APROBO :"+numeroRandom);
	}
	else
	{
		alert("Vamos, la proxima se puede: "+numeroRandom);
	}
}
}//FIN DE LA FUNCIÓN