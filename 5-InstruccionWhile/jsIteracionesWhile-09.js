/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	// declarar variables
	let numero;

	let nMax;

	let nMin;

	let respuesta;

	let flag = 0;
	
	do {

		numero = parseInt(prompt("Inserte el numero que desee"))
		
		while (isNaN(numero)) {

			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero"))
		}
		if (flag == 0) {
		
			alert("Es la primera vez")
			
			nMax = numero
			
			nMin = numero
			
			flag = 1

		} else {

			console.log("No es la primera vez")
			
			if (numero > nMax) {
				
				nMax = numero;
			
			} else if (numero < nMin) {

				nMin = numero
			}
		}

		respuesta = prompt("Desea ingresar otro numero? si/no");


	} while (respuesta == "si")

	document.getElementById("txtIdMinimo").value = nMin

	document.getElementById("txtIdMaximo").value = nMax
}//FIN DE LA FUNCIÓN