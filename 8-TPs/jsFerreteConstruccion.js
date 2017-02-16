/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var b;
var h;
var r;
function Rectangulo () 
{
	b = document.getElementById("Largo").value;
	b = parseFloat(b);
	h = document.getElementById("Ancho").value;
	h = parseFloat(h);
	alert("la cantidad de alambre necesario es: " + (2*(b + h) * 3) + " metros");
}
function Circulo () 
{
	r = document.getElementById("Radio").value;
	r = parseFloat(r);
	alert("la cantidad de alambre necesario " + (2*Math.PI*r * 3) + " metros");
}
function Materiales () 
{
	b = document.getElementById("Largo").value;
	b = parseFloat(b);
	h = document.getElementById("Ancho").value;
	h = parseFloat(h);
	alert("necesita " + (b*h*2) + " bolsas de cemento y " + (b*h*3) + " bolsas de cal");
}