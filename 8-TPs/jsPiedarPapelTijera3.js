var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	numeroSecreto =Math.floor( Math.random()*3)+1;
		//alert(numeroSecreto);
		switch(numeroSecreto)
		{
			case 1:
				eleccionMaquina="piedra";
				break;
			case 2:
				eleccionMaquina="papel";
				break;
			case 3:
				eleccionMaquina="tijera";
				break;

		}
		//alert(eleccionMaquina);



}//FIN DE LA FUNCIÓN
function piedra()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	eleccionHumano="piedra";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("empate.");	
		ContadorDeEmpates++;	
	}
	else if(eleccionMaquina=="tijera")
	{
		alert("vos ganastes.");
		ContadorDeGanadas++;
	}
	else
	{
		alert("ganó la Maquina.");
		ContadorDePerdidas++;
	}

mostarResultado();

}//FIN DE LA FUNCIÓN
function papel()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	eleccionHumano="papel";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("empate.");
		ContadorDeEmpates++;		

	}
	else if(eleccionMaquina=="piedra")
	{
		alert("vos ganastes.");
		ContadorDeGanadas++;
	}
	else
	{
		alert("ganó la Maquina.");
		ContadorDePerdidas++;
	}
mostarResultado();
}//FIN DE LA FUNCIÓN
function tijera()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	eleccionHumano="tijera";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("empate.");
		ContadorDeEmpates++;		
	}
	else if(eleccionMaquina=="papel")
	{
		alert("vos ganastes.");
		ContadorDeGanadas++;
	}
	else
	{
		alert("ganó la Maquina.");
		ContadorDePerdidas++;
	}
mostarResultado();
}//FIN DE LA FUNCIÓN

function mostarResultado()
{

document.getElementById('empatadas').value=ContadorDeEmpates + " partidas empatadas.";
document.getElementById('perdidas').value=ContadorDePerdidas + " partidas perdidas.";
document.getElementById('ganadas').value=ContadorDeGanadas + " partidas ganadas.";

comenzar();
}