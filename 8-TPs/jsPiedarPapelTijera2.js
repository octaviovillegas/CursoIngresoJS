var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
{
function comenzar()
{
	eleccionMaquina=Math.floor(Math.random()*3) + 1;
    console.log (eleccionMaquina);

}
//FIN DE LA FUNCIÓN

function piedra()
{
switch (eleccionMaquina){
    
    case 1:
	
    alert ("Empate");
    	ContadorDeEmpates++;
	break
    
    case 2:
    
	alert ("Perdiste");
    ContadorDePerdidas++;
	break
    
    default:
	
    alert ("Ganaste");
	ContadorDeGanadas++;
}
mostrarResultado();
comenzar();

}//FIN DE LA FUNCIÓN

function papel()
{
switch (eleccionMaquina){
    
    case 1:
	 alert ("Ganaste");
    ContadorDeGanadas++;
	break
    
    case 2:
    alert ("Empataste");
	ContadorDeEmpates++;
    break
    
    default:
	
    alert ("Perdiste")
	ContadorDePerdidas++;
}
mostrarResultado();
comenzar();

}//FIN DE LA FUNCIÓN
function tijera()
{
	switch (eleccionMaquina){
    
    case 1:
	
    alert ("Perdiste");
    ContadorDePerdidas++;
	break
    
    case 2:
	
    alert ("Ganaste");
    ContadorDeGanadas++;
	break
    
    default:

    alert ("Empataste");
		ContadorDeEmpates++;

	}
mostrarResultado();
comenzar();

}
function mostrarResultado()
{

document.getElementById('empatadas').value=ContadorDeEmpates + " partidas empatadas.";
document.getElementById('perdidas').value=ContadorDePerdidas + " partidas perdidas.";
document.getElementById('ganadas').value=ContadorDeGanadas + " partidas ganadas.";
}

comenzar();

}