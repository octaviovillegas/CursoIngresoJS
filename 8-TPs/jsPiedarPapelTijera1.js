/*
Al comenzar el juego generaremos un número 
1	RANDOM del 1 al 3 para la selección de la máquina, 
2	siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
3	El jugador seleccionará una imagen correspondiente a su opción  y 
4	le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{

	eleccionMaquina = Math.floor((Math.random() * 3) + 1);

	//alert(eleccionMaquina)8;
		
}//FIN DE LA FUNCIÓN
function piedra()
{

	piedra = 1;
	papel = 2;
	tijera = 3;
	
	if (eleccionMaquina == piedra) 
	{
		alert("empató");
	}
	else if (eleccionMaquina == tijera) 
	{
		alert("ganó");
	}
	else if (eleccionMaquina == papel) 
	{
		alert("perdió");
	}

}//FIN DE LA FUNCIÓN
function papel()
{

	piedra = 1;
	papel = 2;
	tijera = 3;
	
	if (eleccionMaquina == papel) 
	{
		alert("empató");
	}
	else if (eleccionMaquina == piedra) 
	{
		alert("ganó");
	}
	else if (eleccionMaquina == tijera) 
	{
		alert("perdió");
	}


}//FIN DE LA FUNCIÓN
function tijera()
{

	piedra = 1;
	papel = 2;
	tijera = 3;

	if (eleccionMaquina == tijera) 
	{
		alert("empató");
	}
	else if (eleccionMaquina == papel) 
	{
		alert("ganó");
	}
	else if (eleccionMaquina == piedra) 
	{
		alert("perdió");
	}

}//FIN DE LA FUNCIÓN