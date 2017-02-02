/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var numerouno;
	var RESULTADO;
	numerouno=document.getElementById('sueldo').value;
	parseInt(numerouno);
	RESULTADO=numerouno*1.1
	document.getElementById("resultado").value=RESULTADO;
}
