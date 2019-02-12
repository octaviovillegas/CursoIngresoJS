/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var laSuma;

	primerPrecio = PrecioUno.value;
 	segundoPrecio = PrecioDos.value;
 	tercerPrecio = PrecioTres.value;
 
 	primerPrecio = parseInt(primerPrecio);
 	segundoPrecio = parseInt(segundoPrecio);
 	tercerPrecio = parseInt(tercerPrecio);

 	laSuma = primerPrecio + segundoPrecio + tercerPrecio;
 
 	alert("Su resultado es " + laSuma);
}
function Promedio () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var promedio;
	var suma;

	primerPrecio = PrecioUno.value;
 	segundoPrecio = PrecioDos.value;
 	tercerPrecio = PrecioTres.value;
 
 	primerPrecio = parseInt(primerPrecio);
 	segundoPrecio = parseInt(segundoPrecio);
 	tercerPrecio = parseInt(tercerPrecio);
 
 	suma = primerPrecio + segundoPrecio + tercerPrecio;
 	
 	promedio = suma / 3;

 	alert("Su promedio es: " + promedio);	
}
function PrecioFinal () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var suma;
	var iva;

	primerPrecio = PrecioUno.value;
 	segundoPrecio = PrecioDos.value;
 	tercerPrecio = PrecioTres.value;
 
 	primerPrecio = parseInt(primerPrecio);
 	segundoPrecio = parseInt(segundoPrecio);
 	tercerPrecio = parseInt(tercerPrecio);
 
 	suma = primerPrecio + segundoPrecio + tercerPrecio;
 	
 	iva = suma * 1.21;

 	alert("Su precio final es: " + iva);
}