/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	eleccionMaquina=Math.floor(Math.random()*(3-1+1))+1;
	console.log(eleccionMaquina);


}//FIN DE LA FUNCIÓN
function piedra()
{
	comenzar();
	switch(eleccionMaquina)
	{
		case 1:
		{
			console.log("empato");
			break;
		}

		case 2:
		{
			console.log("perdio");
			break;
		}
		case 3:
		{
			console.log("gano");
			break;
		}

	}

}//FIN DE LA FUNCIÓN
function papel()
{
	comenzar();
	switch(eleccionMaquina)
	{
		case 1:
		{
			console.log("gano");
			break;
		}

		case 2:
		{
			console.log("empato");
			break;
		}
		case 3:
		{
			console.log("perdio");
			break;
		}

	}


}//FIN DE LA FUNCIÓN
function tijera()
{
	comenzar();
	switch(eleccionMaquina)
	{
		case 1:
		{
			console.log("perdio");
			break;
		}

		case 2:
		{
			console.log("gano");
			break;
		}
		case 3:
		{
			console.log("empato");
			break;
		}

	}
	

}//FIN DE LA FUNCIÓN