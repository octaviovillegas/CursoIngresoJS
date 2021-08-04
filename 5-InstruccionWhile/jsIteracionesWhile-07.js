/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let contador;
	let acumulador;
	let respuesta;
	let rep = 0;
	contador = 0;
	acumulador = 0;
		do{
		contador = parseInt(prompt("Ingrese un numero"))
		acumulador += contador;
		rep++
		respuesta = prompt("Desea ingresar otro numero? si/no");


	}while(respuesta=="si");

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / rep;
}//FIN DE LA FUNCIÓN