/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var aumento = parseInt(document.getElementsByTagName('input')[0].value);
	document.getElementsByTagName('input')[1].value = aumento * 1.1;
}
