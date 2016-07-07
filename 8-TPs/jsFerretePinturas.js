/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
var temperature=document.getElementById('Temperatura').value;
var resultado;
resultado=(parseInt(temperature)*1.8)+32;
alert(+temperature+" grados Fahrenheit son "+resultado+" grados centígrados");
}

function CentigradosFahrenheit () 
{
var temperature=document.getElementById('Temperatura').value;
var resultado=(parseInt(temperature)-32)/1.8;
alert(+temperature+" grados centígrados son "+resultado+" grados Fahrenheit");
}
