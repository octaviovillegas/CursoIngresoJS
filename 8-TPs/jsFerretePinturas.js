/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	
	var fahrenheitGrados;
	var pasajeaCelcius;
	var paraMensaje;

	 fahrenheitGrados = Temperatura.value;

	 fahrenheitGrados = parseInt(fahrenheitGrados);

	pasajeaCelcius = ((fahrenheitGrados - 32) * 5/9);

	paraMensaje = fahrenheitGrados + 0;

	alert(paraMensaje + "°F son " + pasajeaCelcius + "°C");

}

function CentigradosFahrenheit () 
{
	
	var celciusGrados;
	var pasajeaFahrenheit;
	var paraMensaje;

	 celciusGrados = Temperatura.value;

	 celciusGrados = parseInt( celciusGrados);

	pasajeaFahrenheit = (( celciusGrados * 9/5) + 32);

	paraMensaje = celciusGrados + 0;

	alert(paraMensaje + "°C son " + pasajeaFahrenheit + "°F");

}
