function mostrar() {
	let destino = document.getElementById("txtIdDestino").value;
	let estacion = document.getElementById("txtIdEstacion").value;
	let precio;
	precio = 15000;

	if (estacion == "Invierno") {
		switch (destino) {
			case "Bariloche":
				alert("El precio final sera " + precio * 1.20);
				break;
			case "Cataratas":
			case "Cordoba":
				alert("El precio final sera " + precio * 0.90);
				break;
			case "Mar del plata":
				alert("El precio final sera " + precio * 0.80);
				break;

		}
	} else if (estacion == "Verano") {
		switch (destino) {
			case "Bariloche":
				alert("El precio final sera " + precio * 0.80);
				break;
			case "Cataratas":
			case "Cordoba":
				alert("El precio final sera " + precio * 1.10);
				break;
			case "Mar del plata":
				alert("El precio final sera " + precio * 1.20);
				break;
		}


	} else if (estacion == "Otoño" || estacion == "Primavera") {
		switch(destino){
			case "Bariloche":
			case "Cataratas":
			case "Cordoba":
				alert("El precio final sera " + precio*1.10);
				break;
			default:
				alert("El precio final sera " + precio);
				break;
		

		}

	}

}//FIN DE LA FUNCIÓN