/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var PrecioUno;
var PrecioDos;
var PrecioTres;

function Sumar () 
{
	PrecioTres = parseInt(document.getElementById('PrecioTres').value);
	PrecioDos = parseInt(document.getElementById('PrecioDos').value);
	PrecioUno = parseInt(document.getElementById('PrecioUno').value);
	alert(PrecioTres + PrecioDos + PrecioUno);	
}
function Promedio () 
{
	PrecioTres = parseInt(document.getElementById('PrecioTres').value);
	PrecioDos = parseInt(document.getElementById('PrecioDos').value);
	PrecioUno = parseInt(document.getElementById('PrecioUno').value);
	alert((PrecioTres + PrecioDos + PrecioUno)/3);		
}
function PrecioFinal () 
{
	PrecioTres = parseInt(document.getElementById('PrecioTres').value);
	PrecioDos = parseInt(document.getElementById('PrecioDos').value);
	PrecioUno = parseInt(document.getElementById('PrecioUno').value);
	alert((PrecioTres + PrecioDos + PrecioUno)*1.21);
}