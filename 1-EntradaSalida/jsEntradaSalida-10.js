/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	let importe;
	let resultado;
	let porcentaje
	importe = parseInt(document.getElementById("txtIdImporte").value);
	porcentaje = importe *0.25;
	resultado = importe - porcentaje;
	document.getElementById("txtIdResultado").value = resultado

}
