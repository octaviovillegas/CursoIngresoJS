/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precioUno;
var precioDos;
var precioTre;

function Sumar () 
{
	precioUno = parseInt(document.getElementById("PrecioUno").value);
	precioDos = parseInt(document.getElementById("PrecioDos").value);
	precioTres = parseInt(document.getElementById("PrecioTres").value);
	alert("La suma de los valores ingresado es: " + (precioUno + precioDos + precioTres));
}
function Promedio () 
{
	precioUno = parseInt(document.getElementById("PrecioUno").value);
	precioDos = parseInt(document.getElementById("PrecioDos").value);
	precioTres = parseInt(document.getElementById("PrecioTres").value);
	alert("La suma de los valores ingresado es: " + (precioUno + precioDos + precioTres)/3);	
}
function PrecioFinal () 
{
	precioUno = parseInt(document.getElementById("PrecioUno").value);
	precioDos = parseInt(document.getElementById("PrecioDos").value);
	precioTres = parseInt(document.getElementById("PrecioTres").value);
	alert("La suma de los valores ingresado es: " + (precioUno + precioDos + precioTres)*1.21);
}