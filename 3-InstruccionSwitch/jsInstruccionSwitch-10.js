function mostrar() {
	let destino = document.getElementById("txtIdDestino").value;
	let estacion = document.getElementById("txtIdEstacion").value;
	if (estacion == "Invierno") {
		switch (destino) {
			case "Bariloche":
				alert("Se viaja");
				break;
			default:
				alert("No se viaja");
		}
	} else if (estacion == "Verano") {
		switch (destino) {
			case "Mar del plata":
			case "Cataratas":
				alert("Se viaja");
				break;
			default:
				alert("No se viaja");
		}


	} else if (estacion == "Primavera") {
		switch (destino) {
			case "Bariloche":
				alert("No se viaja")
				break;
			default:
				alert("Se viaja")
				break;



		}

	}
	else if (estacion == "Otoño") {
		alert("Se viaja")

		
	}

	}//FIN DE LA FUNCIÓN