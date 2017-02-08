/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
	var uno=document.getElementById('PrecioUno').value;
    var dos=document.getElementById('PrecioDos').value;
    var tres=document.getElementById('PrecioTres').value;
    uno=parseInt(uno);
    dos=parseInt(dos);
    tres=parseInt(tres);
	var suma=uno+dos+tres;
	console.log(suma);
}
function Promedio ()
{
	var uno=document.getElementById('PrecioUno').value;
    var dos=document.getElementById('PrecioDos').value;
    var tres=document.getElementById('PrecioTres').value;
    uno=parseInt(uno);
    dos=parseInt(dos);
    tres=parseInt(tres);
 	var promedio=(uno+dos+tres)/3;
	console.log(promedio);
}
	
function PrecioFinal ()
{
	var uno=document.getElementById('PrecioUno').value;
    var dos=document.getElementById('PrecioDos').value;
    var tres=document.getElementById('PrecioTres').value;
    uno=parseInt(uno);
    dos=parseInt(dos);
    tres=parseInt(tres);
	var final=(uno+dos+tres)*1.21;
	console.log(final);
}