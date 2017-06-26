function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota = Math.floor(Math.random()*(11-1)) + 1

	if (nota >=9){
			alert (nota+ " EXELENTE")
	}
	else if (nota <4){
		alert(nota+ " Vamos la proxima se puede")
	}
	else{
		alert (nota+ " Aprobo")
}

}//FIN DE LA FUNCIÓN