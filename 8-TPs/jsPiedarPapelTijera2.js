var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	 	
	eleccionMaquina = Math.floor((Math.random() * 1) + 1);
	alert(ContadorDeEmpates);


}//FIN DE LA FUNCIÓN
function piedra()
{

	piedra = 1;
	papel = 2;
	tijera = 3;
	
	if (eleccionMaquina == piedra) 
	{
		alert("empató");
		ContadorDeEmpates = ContadorDeEmpates + 1;
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
}//FIN DE LA FUNCIÓN
function tijera()
{
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

	console.log(ContadorDeEmpates);

//alert("Usted empató " + ContadorDeEmpates + ",ganó " + ContadorDeGanadas + " y perdió " + ContadorDePerdidas + " veces");

	/*if (eleccionMaquina == piedra) 
	{
	}*/
	/*var jGanados;
	var jPerdidas;
	var jEmpatadas;

	jGanados = document.getElementById('ganadas');
	jPerdidas = document.getElementById('perdidas');
	jEmpatadas = document.getElementById('empatadas');*/

		//console.log(ContadorDeEmpates);

}