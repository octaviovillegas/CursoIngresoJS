/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var valor;


function comenzar()
{
	eleccionMaquina=Math.floor(Math.random()*(4-1)) + 1;
    console.log (eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{
switch (eleccionMaquina){
    case 1:
    alert ("Empate");
    break
    
}
 
}


}//FIN DE LA FUNCIÓN
function papel()
{
valor=document.onclick("papel()").value

}//FIN DE LA FUNCIÓN
function tijera()
{
	valor=document.onclick("tijera()").value

}//FIN DE LA FUNCIÓN