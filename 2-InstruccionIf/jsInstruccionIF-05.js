function mostrar() {
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	if (edad >= 13 && edad >= 18) {
		alert("La persona no es adolescente");
	}

}//FIN DE LA FUNCIÓN