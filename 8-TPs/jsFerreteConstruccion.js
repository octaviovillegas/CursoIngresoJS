/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var achoTerreno;
	var radioTerreno;
	var resultado;
	largoTerreno=document.getElementById('Largo').value;
	anchoTerreno=document.getElementById('Ancho').value;
	radioTerreno=document.getElementById('Radio').value;
	resultado=((parseInt(largoTerreno)*2)+(parseInt(anchoTerreno)*2)*3);
}	alert("Se deben comprar: "+resultado+" cantidades de alambre para alambrar el terreno con tres hilos");
function Circulo () 
{
	var largoTerreno;
	var achoTerreno;
	var radioTerreno;
	var resultado;
	largoTerreno=document.getElementById('Largo').value;
	anchoTerreno=document.getElementById('Ancho').value;
	radioTerreno=document.getElementById('Radio').value;
	resultado=parseInt(radioTerreno)*2*3.14;
	alert("Se deben comprar "+resultado+" cantidades de alambre para alambrar el terreno circular con tres hilos");
}
function Materiales () 
{
var largoTerreno;
var achoTerreno;
var radioTerreno;
var bolsasDeCementoPorMetroCuadrado;
var bolsasDeCal;
var metroCuadrado
largoTerreno=document.getElementById('Largo').value;
anchoTerreno=document.getElementById('Ancho').value;	
radioTerreno=document.getElementById('Radio').value;
bolsasDeCemento=parseInt(largoTerreno)*parseInt(anchoTerreno)*2;
bolsasDeCal=parseInt(largoTerreno)*parseInt(anchoTerreno)*3;
metroCuadrado=parseInt(largoTerreno)*parseInt(anchoTerreno);
alert("Se necesitan "+bolsasDeCemento+" bolsas de cemento y "+bolsasDeCal+" bolsas de cal para hacer un contrapiso de "+metroCuadrado+" metros cuadrados");
}