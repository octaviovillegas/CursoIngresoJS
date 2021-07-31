function mostrar()
{
	let destino = document.getElementById("txtIdDestino").value;
	switch(destino){
		case "Bariloche":
		case "Usuhaia":
			alert("Que frio que hace che")
			break;
		default:
			alert("Hace calor")
			break;
	}

}//FIN DE LA FUNCIÓN