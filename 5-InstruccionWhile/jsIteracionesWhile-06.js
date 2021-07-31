function mostrar() {
	let numero;
	let contador = 0;
	let acumulador = 0;

	while (contador < 5) {
		numero = parseInt(prompt("Ingrese el numero"))
		contador = contador + 1
		acumulador = acumulador + numero


	}


	promedio = acumulador / 5;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN
