function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota = Math.floor(Math.random() * 10) + 1;
	if(nota >= 9) {
		alert("EXCELENTE");
	}
	else{ 
		if(nota >= 4) {
			alert("APBROBÓ");
		}
		else{
			alert("Vamos, la proxima se puede");
		}
	}
}//FIN DE LA FUNCIÓN