/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	eleccionMaquina = Math.floor(Math.random() * 3)+1;
	

}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina){
		case 1:
			alert("EMPATE!");
			break;
		case 2:
			alert("PERDISTE, EL PAPEL LE GANA A LA PIEDRA!");
			break;
		case 3:
			alert("MUY BIEN!");
			break;
	}
	location.reload();
}//FIN DE LA FUNCIÓN
function papel()
{
	switch(eleccionMaquina){
		case 1:
			alert("MUY BIEN!");
			break;
		case 2:
			alert("EMPATE!");
			break;
		case 3:
			alert("PERDISTE, LA TIJERA LE GANA AL PAPEL!");
			break;
	}
	location.reload();
}//FIN DE LA FUNCIÓN
function tijera()
{
	switch(eleccionMaquina){
		case 1:
			alert("PERDISTE, LA PIEDRA LE GANA A LA TIJERA!");
			break;
		case 2:
			alert("MUY BIEN!");
			break;
		case 3:
			alert("EMPATE!");
			break;
	}
	location.reload();
}//FIN DE LA FUNCIÓN