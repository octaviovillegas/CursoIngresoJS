/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;
	resultado=parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres);
	alert("La suma de los tres precios es: "+resultado);
}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;
	resultado=(parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres))/3;
	alert("El promedio de los precios es: "+resultado);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;
	resultado=((parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres))*0.21)+(parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres));
	alert("El precio final más IVA es: "+resultado);
}