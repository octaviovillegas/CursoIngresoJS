function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota
	
	nota = Math.floor(Math.random()*(10-1) + 1);

	if (nota >=9){

	alert("EXCELENTE")
	}
	else{
		if(nota >= 4){
			alert("aprobo")
		}
		else{
			alert("desaprobo")
		}

	}
	alert(nota)



}//FIN DE LA FUNCIÓN