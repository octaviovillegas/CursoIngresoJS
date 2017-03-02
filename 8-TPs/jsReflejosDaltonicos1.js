/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;
function comenzar()
{

	tiempoInicio=  new Date();
 	tiempoInicio=tiempoInicio.getTime();
	ColorSecreto = Math.floor(Math.random() * 6);
	adivinaColor = document.getElementById("ColorElejido");
	adivinaColor.value="ADIVINA DE QUE COLOR ES EL TEXTO";
	switch(ColorSecreto){
		case 0:
			adivinaColor.style = "color:blue;"
			ColorSecreto = "azul";
			break;
		case 1:
			adivinaColor.style = "color:yellow;"
			ColorSecreto = "amarillo";
			break;
		case 2:
			adivinaColor.style = "color:brown;"
			ColorSecreto = "marron";
			break;
		case 3:
			adivinaColor.style = "color:green;"
			ColorSecreto = "verde";
			break;
		case 4:
		//no se como es celeste 8-)
			adivinaColor.style = "color:skyblue;"
			ColorSecreto = "celeste";
			break;
		case 5:
			adivinaColor.style = "color:red;"
			ColorSecreto = "rojo";
			break;
	}
}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
	var tiempoFinal = new Date();
	tiempoFinal = tiempoFinal.getTime() - tiempoInicio;
	if(colorParametro == ColorSecreto){
		alert("adivinaste el color en " + tiempoFinal / 1000 + " segundos")
		location.reload();
	}else{
		alert("VOLVE A INTENTAR");
	}
	


}//FIN DE LA FUNCIÓN
