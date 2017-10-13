function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
	if (randomNumber>8) {
		alert(randomNumber+" EXCELENTE");
	}
	else if(randomNumber>3 && randomNumber<9){
		alert(randomNumber+" APROBÓ");
	}
	else {
		alert(randomNumber+" Vamos, la proxima se puede");
	}
	

}//FIN DE LA FUNCIÓN