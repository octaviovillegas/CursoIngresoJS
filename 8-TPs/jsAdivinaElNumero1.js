/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor(Math.random() * 100) + 1;
		//alert(numeroSecreto );
	contadorIntentos = 0;
	alert("It's SHOWTIME!");
	document.getElementById("intentos").value = contadorIntentos;

}

function verificar()
{
	var numero = parseInt(document.getElementById("numero").value);
	switch(contadorIntentos){
		case 0:
			if(numero == numeroSecreto){
				alert("FLAWLESS VICTORY!");
			}else if(numero > numeroSecreto){
				alert("Se pasó del número secreto");
			}else{
				alert("Falta para el número secreto");
			}
			contadorIntentos++;
			break;
		case 1:
			if(numero == numeroSecreto){
				alert("CONGRATULATIONS YOU WIN!, EN SOLO " + contadorIntentos + " INTENTOS");
			}else if(numero > numeroSecreto){
				alert("Se pasó del número secreto");
			}else{
				alert("Falta para el número secreto");
			}
			contadorIntentos++;
			break;
		case 2:
			if(numero == numeroSecreto){
				alert("LA TERCERA ES LA VENCIDA!, EN SOLO " + contadorIntentos + " INTENTOS");
			}else if(numero > numeroSecreto){
				alert("Se pasó del número secreto");
			}else{
				alert("Falta para el número secreto");
			}
			contadorIntentos++;
			break;
		case 3:
			if(numero == numeroSecreto){
				alert("YOU WIN!, EN SOLO " + contadorIntentos + " INTENTOS");
			}else if(numero > numeroSecreto){
				alert("Se pasó del número secreto");
			}else{
				alert("Falta para el número secreto");
			}
			contadorIntentos++;
			break;
		case 4:
			if(numero == numeroSecreto){
				alert("YOU WIN!, EN SOLO " + contadorIntentos + " INTENTOS");
			}else if(numero > numeroSecreto){
				alert("Se pasó del número secreto");
			}else{
				alert("Falta para el número secreto");
			}
			contadorIntentos++;
			break;
		case 5:
			if(numero == numeroSecreto){
				alert("YOU WIN!, EN SOLO " + contadorIntentos + " INTENTOS");
			}else {
				alert("GAME OVER!");
				location.reload();
			}
			break;
	}
	document.getElementById("intentos").value = contadorIntentos;
}