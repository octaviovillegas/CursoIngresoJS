function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero=Math.random()*10+1;
	numero=parseInt(numero);
	if (numero>=9) 
	{
		console.log("Excelente")
	}
	else 
	{
		if(numero>=4)
		{
			console.log("Aprobo")
		}
		else
		{
			console.log("Vamos, la proxima se puede")
		}
	}

}//FIN DE LA FUNCIÓN