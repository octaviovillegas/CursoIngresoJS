/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	var largoDelTerreno;
	var anchoDelTerreno;
	var cantidadDeHilo;

	largoDelTerreno = Largo.value;
	anchoDelTerreno = Ancho.value;

	largoDelTerreno = parseInt(largoDelTerreno);
	anchoDelTerreno = parseInt(anchoDelTerreno);

	cantidadDelHilo = ((largoDelTerreno * 2) + (anchoDelTerreno * 2)) * 3;

	alert("Cantidad de hilo: " + cantidadDelHilo + "m²");

}
function Circulo () 
{

	var radioDelTerreno;
	var cantidadDelHilo;

	radioDelTerreno = Radio.value;

	radioDelTerreno = parseInt(radioDelTerreno);

	cantidadDelHilo = radioDelTerreno * 2 * 3.14 * 3;

	alert("Cantidad de hilo: " + cantidadDelHilo + "m²");

}
function Materiales () 
{
	
	var largoDelTerreno;
	var anchoDelTerreno;
	var perimetroDelTerreno;
	var cantidadDeBolsasDeCemento;
	var cantidadDeBolsasDeCal;

	largoDelTerreno = Largo.value;
	anchoDelTerreno = Ancho.value;

	largoDelTerreno = parseInt(largoDelTerreno);
	anchoDelTerreno = parseInt(anchoDelTerreno);

	perimetroDelTerreno = largoDelTerreno * anchoDelTerreno;

	cantidadDeBolsasDeCemento = perimetroDelTerreno * 2;
	cantidadDeBolsasDeCal = perimetroDelTerreno * 3;

	alert("Cantidad de bolsas de cemento: " + cantidadDeBolsasDeCemento + "    Cantidad de bolsas de cal: " + cantidadDeBolsasDeCal);

}/*placeholder="Largo del terreno" id="Largo">
				<input type="text"  placeholder="Ancho del terreno" id="Ancho">
				<input type="text"  placeholder="Radio del terreno" id="Radio">*/