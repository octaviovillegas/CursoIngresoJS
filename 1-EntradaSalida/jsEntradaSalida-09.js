/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var ingresoSueldo;
	var aumento;
	var resultado;
	 ingresoSueldo=document.getElementById('txtIdSueldo').value;
	 ingresoSueldo=parseInt(ingresoSueldo);
	 aumento=parseInt(aumento);
	 resultado=ingresoSueldo+aumento;
	alert("Resultado: "+resultado);
}
