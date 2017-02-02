/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var numerouno;
	var RESULTADO;
	numerouno=document.getElementById('importe').value;
	parseInt(numerouno);
	RESULTADO=numerouno*0.75
	document.getElementById('resultado').value=RESULTADO;

}
