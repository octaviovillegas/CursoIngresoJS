/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	
	var sueldo;
	var sueldoConDescuento;
	var descuento;


		sueldo = document.getElementById('sueldo').value;
		sueldo = parseFloat(sueldo);


			descuento = sueldo * 0.25;


				sueldoConDescuento = sueldo + descuento;
					

		sueldoConDescuento = document.getElementById('resultado').value;

		
}
