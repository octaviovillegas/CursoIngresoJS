/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	importe=txtIdImporte.value

	result = parseInt(importe) - parseInt(importe * 25)/100;
	
	txtIdResultado.value=result;
}
