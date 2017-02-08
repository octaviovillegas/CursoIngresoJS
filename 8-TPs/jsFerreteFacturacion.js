/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numerouno;
	var numerodos;
	var numerotres;
	var resultado;
	numerouno=document.getElementById('PrecioUno').value;
	numerodos=document.getElementById('PrecioDos').value;
	numerotres=document.getElementById('PrecioTres').value;
	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);
	numerotres=parseInt(numerotres);
	resultado=numerouno+numerodos+numerotres;
	alert("la suma es "+resultado);
}
function Promedio () 
{
	var numerouno;
	var numerodos;
	var numerotres;
	var resultado;
	numerouno=document.getElementById('PrecioUno').value;
	numerodos=document.getElementById('PrecioDos').value;
	numerotres=document.getElementById('PrecioTres').value;
	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);
	numerotres=parseInt(numerotres);
	resultado=(numerouno+numerodos+numerotres)/3;
	alert("la suma es "+resultado);
}
function PrecioFinal () 
{
	var numerouno;
	var numerodos;
	var numerotres;
	var resultado;
	var resultado2;
	numerouno=document.getElementById('PrecioUno').value;
	numerodos=document.getElementById('PrecioDos').value;
	numerotres=document.getElementById('PrecioTres').value;
	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);
	numerotres=parseInt(numerotres);
	resultado=numerouno+numerodos+numerotres;
	resultado2=(resultado*21)/100;
	resultado=resultado2+resultado;
	alert("la suma es "+resultado);
}