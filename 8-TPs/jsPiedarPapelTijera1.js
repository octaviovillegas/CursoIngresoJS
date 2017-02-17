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
    
    case 2:
    alert ("Perdiste");
    break
    
    default:
    alert ("Ganaste")
}
 comenzar();

}//FIN DE LA FUNCIÓN

function papel()
{
switch (eleccionMaquina){
    
    case 1:
    alert ("Ganaste");
    break
    
    case 2:
    alert ("Empataste");
    break
    
    default:
    alert ("Perdiste")
}
 comenzar();

}//FIN DE LA FUNCIÓN
function tijera()
{
	switch (eleccionMaquina){
    
    case 1:
    alert ("Perdiste");
    break
    
    case 2:
    alert ("Ganaste");
    break
    
    default:
    alert ("Empataste")
}
 comenzar();

}//FIN DE LA FUNCIÓN