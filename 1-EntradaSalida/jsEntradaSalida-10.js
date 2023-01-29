/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	let importe;
	let resultado;
	let importedescuento;

	importe = parseFloat(document.getElementById("txtIdImporte").value); 
	resultado = parseFloat(document.getElementById("txtIdResultado").value); 

//para calcular el descuento, se divide el porcentaje por 100 y eso se multiplica por el precio original.
	
//importedescuento = 25 / 100 * importe;

importedescuento = .25 * importe;

document.getElementById("txtIdResultado").value = importedescuento;



}

