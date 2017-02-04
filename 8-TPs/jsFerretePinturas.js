/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var temp;
function FahrenheitCentigrados () 
{
	temp = parseFloat(document.getElementById("Temperatura").value);
	alert(temp + " Fahrenheit son " + ((temp - 32)/1.8) + " Centígrados");
}

function CentigradosFahrenheit () 
{
	temp = parseFloat(document.getElementById("Temperatura").value);
	alert(temp + " Centígrados son " + ((temp * 1.8) + 32) + " Fahrenheit");
}
