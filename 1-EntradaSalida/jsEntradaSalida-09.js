/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let sueldoParseado;
	let resultado;

	sueldo = document.getElementById("txtIdSueldo").value;
	resultado = sueldo * 1.10;
	sueldoParseado = parseInt(resultado)


	document.getElementById("txtIdResultado").value = sueldoParseado;
	
}
