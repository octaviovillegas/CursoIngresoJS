function Mostrar()
{
//tomo la edad  
	var laHora = parseInt(document.getElementById('hora').value);
	switch(true){
		case (laHora >= 7 && laHora <=11):
			alert("Es de mañana.");
			break;
		case (laHora > 11 && laHora <= 19):
			alert("Es de tarde.");
			break;
		case (laHora > 19 && laHora <= 24):
		case (laHora >= 0 && laHora < 7):
			alert("Es de noche.")
			break;
		default:
			alert("La hora no existe.");
	}


}//FIN DE LA FUNCIÓN