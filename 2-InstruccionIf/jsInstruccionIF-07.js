function mostrar() {
	let edad;
	let estado;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estado = document.getElementById("estadoCivil").value;
	if (edad < 18 && estado != "Soltero ") {
		alert("Es muy pequeño para NO estar soltero")
	}


}//FIN DE LA FUNCIÓN