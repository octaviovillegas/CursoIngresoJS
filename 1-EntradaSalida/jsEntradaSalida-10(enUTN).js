/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var descuento = parseInt(document.getElementsByTagName('input')[0].value);
	document.getElementsByTagName('input')[1].value = descuento * 0.75;
}
