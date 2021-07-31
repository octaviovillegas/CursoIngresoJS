function mostrar() {
	let edad;
	let estado;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estado = document.getElementById("estadoCivil").value;
	if (edad >= 18) {
		if (estado == "Soltero")
			alert("Es soltero y no es menor")
	}


}//FIN DE LA FUNCIÓN