/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	//declarar contadores y variables 
	let respuesta;
	let numero;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let contadorP = 0;
	let contadorN = 0;
	let ceros = 0;
	let pares = 0;
	let promedioP = 0;
	let promedioN = 0;
	let diferencia;

	do {
		numero = parseInt(prompt("Inserte un numero"));

		while (isNaN(numero)) {

			numero = parseInt(prompt("Eso no es un numero, ingrese un numero."));

		} if (numero > 0) {
			contadorP++;
			sumaPositivos = sumaPositivos + numero;



		} else if (numero < 0) {

			contadorN++;
			sumaNegativos = sumaNegativos + numero;
		} else {
			ceros++
		}
		if (numero % 2 == 0) {
			pares++
		}
		respuesta = prompt("Desea ingresar otro numero? si/no").toLowerCase();

		while (respuesta != "si" && respuesta != "no") {
			respuesta = prompt("Ingrese si para continuar o no para finalizar").toLowerCase();

		}
	} while (respuesta == "si");
	if (contadorP != 0) {
		promedioP = sumaPositivos / contadorP

	}
	if (contadorN != 0) {
		promedioN = sumaNegativos / contadorN

	}

	diferencia = sumaPositivos - sumaNegativos

	console.log("La cantidad de ceros es " + ceros);
	console.log("La suma de los numeros positivos es " + sumaPositivos);
	console.log("La cantidad de numeros postivos es " + contadorP)
	console.log("La cantidad de numeros negativos es " + contadorN)
	console.log("La suma de los numeros negativos es " + sumaNegativos);
	console.log("El promedio de positovos es " + promedioP);
	console.log("El promedio de negativos es " + promedioN);
	console.log("La diferencia entre positivos y negativos es " + diferencia)
}
